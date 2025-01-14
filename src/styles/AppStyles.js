// src/styles/AppStyles.js
import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // 배경색을 밝은 색으로 설정
    padding: 20, // 여백 추가
  },
  logo: {
    height: '40%', // vmin 대신 비율로 설정
    pointerEvents: 'none', // 포인터 이벤트 없음
  },
  headerHome: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%', // 화면의 100% 너비 사용
    height: '100%', // 화면 높이의 100% 사용
  },
  link: {
    color: '#61dafb',
  },
  image: {
    width: '100%', // 이미지 너비를 100%로 설정
    height: 'auto', // 비율 유지
  },
});

export default AppStyles;