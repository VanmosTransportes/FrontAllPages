import styled from 'styled-components/native';
import { StyleSheet, Animated } from 'react-native'

export const Container = styled(Animated.ScrollView)`
  background-color: #ffc107;
`;

export const Title =  styled.Text`
    color: #000;
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 20px;
    font-style: italic;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #040304;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #040304;
  font-weight: bold;
  font-size: 13px;
`;