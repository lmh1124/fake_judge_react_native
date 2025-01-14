// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Image, Text, StyleSheet } from 'react-native';
import MainPage from './screens/mainPage'; // 사건 입력 컴포넌트
import ResultPage from './screens/resultPage'; // ResultPage 추가
import AppStyles from './styles/AppStyles'; // 스타일 임포트

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="ResultPage" component={ResultPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = ({ navigation }) => {
  return (
    <View style={AppStyles.container}>
      <View style={AppStyles.headerHome}>
        <Image
          source={require('./img/main.png')} // 이미지 파일 경로
          style={AppStyles.image}
          onTouchEnd={() => navigation.navigate('MainPage')} // 터치 시 MainPage로 이동
        />
        {/* <Text style={AppStyles.link}>Go to Main Page</Text> */}
      </View>
    </View>
  );
};

export default App;