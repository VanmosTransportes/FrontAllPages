import styled from 'styled-components/native';
import { Animated, StyleSheet } from 'react-native'

export const Container = styled(Animated.ScrollView)`
  background-color: #ffc107;
`;

export const Title =  styled.Text`
    color: #000;
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 23px;
    font-style: italic;
`;

export const Text = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  color: #000;
  text-align: center;
  margin-top: 10px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #040304;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 2.5px;
  margin-left: 25px;
  margin-right: 25px;
`;

