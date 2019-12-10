import styled from 'styled-components/native';
import { StyleSheet, Animated } from 'react-native'

export const Container = styled(Animated.ScrollView)`
  background-color: #ffc107;
`;

export const Text =  styled.Text`
    color: #000;
    margin-top: 30px;
    margin-bottom: 32px;
    margin-right: 100px;
    text-align: center;
    margin-left: 100px;
    font-size: 20px;
    font-style: italic;
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
  margin-top: 20px;
  height: 60px;
`;