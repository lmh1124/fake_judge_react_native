// src/styles/ResultPageStyles.js
import { StyleSheet } from 'react-native';

const ResultPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // 배경색
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  textInput: {
    width: '100%',
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});

export default ResultPageStyles;