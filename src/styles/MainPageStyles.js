// src/styles/MainPageStyles.js
import { StyleSheet } from 'react-native';

const MainPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%', // 화면의 90% 너비 사용
    maxWidth: 500, // 최대 너비 제한
    height: '80%', // 화면 높이의 80% 사용
    backgroundColor: '#add8e6',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // 안드로이드에서 그림자 효과
  },
  title: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 10,
  },
  infoButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#fff',
    color: '#333',
    fontSize: 16,
    borderRadius: 50,
    width: 24,
    height: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  textInput: {
    width: '100%',
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  loadingImage: {
    width: 100,
    height: 100,
  },
  progressBar: {
    zIndex: 1000,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    height: 10,
  },
  progress: {
    height: '100%',
    backgroundColor: '#d39f41',
    borderRadius: 5,
    transition: 'width 0.1s ease', // 애니메이션 효과
  },
});

export default MainPageStyles;