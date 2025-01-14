// src/screens/MainPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // useNavigation 훅 사용
import loadingImage from './img/loading-image.gif';
import MainPageStyles from '../styles/MainPageStyles'; // 스타일 import

const MainPage = () => {
  const [caseTitles, setCaseTitles] = useState('');
  const [caseDetails, setCaseDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0); // 진행률 상태 추가
  const navigation = useNavigation(); // useNavigation 훅 사용

  const handleSubmit = async () => {
    if (caseTitles.trim() === '') {
      alert('고소 취지를 입력해주세요.');
      return;
    }

    if (caseDetails.trim() === '') {
      alert('고소 사실을 입력해주세요.');
      return;
    }

    setLoading(true);
    setProgress(0); // 진행률 초기화

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) { // 90%에서 멈추고
          clearInterval(interval);
          return 90;
        }
        return prev + 1; // 10%씩 증가
      });
    }, 100); // 100ms마다 증가

    try {
      const response = await axios.post('http://localhost:5000/api/cases', {
        titles: caseTitles,
        details: caseDetails
      });
      clearInterval(interval); // 요청 완료 시 진행률 업데이트 중지
      setProgress(100); // 완료 시 100%로 설정
      alert(response.data.message);
      navigation.navigate('ResultPage', { verdict: response.data.verdict });
    } catch (error) {
      alert('접수에 실패했습니다.'); // 실패 메시지
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={MainPageStyles.container}>
      {loading && (
        <View style={MainPageStyles.loadingOverlay}>
          <Image source={loadingImage} style={MainPageStyles.loadingImage} />
          <View style={MainPageStyles.progressBar}>
            <View style={[MainPageStyles.progress, { width: `${progress}%` }]} />
          </View>
        </View>
      )}
      <Text style={MainPageStyles.title}>고 소 취 지</Text>
      <TextInput
        style={MainPageStyles.textInput}
        value={caseTitles}
        onChangeText={setCaseTitles}
        placeholder="상세하게 입력하실 수록 정확한 판결문이 나옵니다."
      />
      <Text style={MainPageStyles.title}>고 소 사 실</Text>
      <TextInput
        style={MainPageStyles.textInput}
        value={caseDetails}
        onChangeText={setCaseDetails}
        placeholder="상세하게 입력하실 수록 정확한 판결문이 나옵니다."
      />
      <Button title="고소 접수" onPress={handleSubmit} />
    </View>
  );
};

export default MainPage;