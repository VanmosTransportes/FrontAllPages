import styled from 'styled-components/native';
import { StyleSheet, Animated } from 'react-native'

export const Container = styled(Animated.ScrollView)`
  background-color: #ffc107;
`;

export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: #000;
  margin-right: 15px;
  margin-left: 15px;
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #000;
`;

export const NavText = styled.Text`
  font-size: 18px;
  color: #000;
  margin-left: 90px;
  font-weight: bold;
  font-style: italic;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #000;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 30px;
  margin-right: 15px;
  margin-left: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 15px;
`;

export const Title =  styled.Text`
    color: #000;
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 23px;
    font-style: italic;
`;