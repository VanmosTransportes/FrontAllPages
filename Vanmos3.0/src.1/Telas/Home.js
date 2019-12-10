import React, { Component } from "react";
import { View } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text, 
  Picker
} from "native-base";

import { SignOutButton,
        SignOutButtonText
} from './styles/home'
//Adicionar estilo como o do nubank
class Home extends Component {
  static navigationOptions = { 
    title: 'Home',
    header: null
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container style={{backgroundColor: '#ECBF06' }}>
        <Header style={{backgroundColor: '#ECBF06'}}>
          <Body style={{alignItems: "center"}}>
            <Title style={{color: "black"}}>Vanmos</Title>
          </Body>
        </Header>
        <Content > 
            <View style={{alignItems: "center"}}>
                <SignOutButton onPress={() => navigate('PerfilPassageiro')} >
                  <SignOutButtonText>Passageiro</SignOutButtonText>
                </SignOutButton> 

                <SignOutButton onPress={() => navigate('TelaDono')} >
                  <SignOutButtonText>Proprietário</SignOutButtonText>
                </SignOutButton>

            </View>
        </Content>
          
      </Container>
    );
  }
}

export default Home