// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB 연결
mongoose.connect('mongodb://127.0.0.1:27017/fake_judge_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 사건 스키마 정의
const caseSchema = new mongoose.Schema({
  details: { type: String, required: true },
  verdict: { type: String }, // 판결 결과 추가
});

const Case = mongoose.model('Case', caseSchema);

// 미들웨어 설정
app.use(cors());
app.use(bodyParser.json());

// OpenAI API 키
const OPENAI_API_KEY = '';

// 사건 등록 API
app.post('/api/cases', async (req, res) => {
  const { titles, details } = req.body;

  // OpenAI API 호출
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4', // 또는 'gpt-3.5-turbo'
      //messages: [{ role: 'user', content: `사건 취지: ${titles}\n\n사건 사실: ${details}\n해당 사건에 대해 한국 법에 근거하여 판결한 결과를 요약해서 보여주세요. 총 100자 안으로` }],
      //max_tokens: 300,
      messages: [{ role: 'user', content: `사건 취지: ${titles}\n\n사건 사실: ${details}\n해당 사건에 대해 한국 법에 근거하여 상세히 판결해주세요. 목차에 1. 사건 개요, 2. 법적 쟁점, 3. 판결 이유, 4. 형량 포함 결론도 같이 보여주세요. 목차는 진한 글씨로` }],
      max_tokens: 1000,
      temperature: 0.7,
    }, {
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const verdict = response.data.choices[0].message.content.trim(); // 판결 결과 가져오기

    const newCase = new Case({ titles, details, verdict });
    await newCase.save();
    res.status(201).json({ message: '접수되었습니다!', verdict });
  } catch (error) {
    console.error(error);
    res.status(400).send('접수에 실패했습니다.');
  }
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});