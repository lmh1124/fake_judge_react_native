// src/screens/ResultPage.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // useNavigation과 useRoute 훅 사용
import ResultPageStyles from '../styles/ResultPageStyles'; // 스타일 import

const ResultPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { verdict } = route.params; // 판결 결과 가져오기

  return (
    <View style={ResultPageStyles.container}>
      <Text style={ResultPageStyles.title}>판결문</Text>
      <TextInput
        style={ResultPageStyles.textInput}
        value={verdict || '판결 결과가 없습니다.'}
        editable={false} // 비활성화된 텍스트 입력
      />
      <Button title="Home" onPress={() => navigation.navigate('MainPage')} />
    </View>
  );
};

export default ResultPage;