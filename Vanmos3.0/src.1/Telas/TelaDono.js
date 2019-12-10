import React, { Component } from 'react'

import {
        Container,
        Nav,
        NavItem,
        NavText,
        SignOutButton,
        SignOutButtonText
} from './styles/dono'

import {
     Header,
     Body,
     Title
} from 'native-base'

import Icon from 'react-native-vector-icons/MaterialIcons'
import HeaderDono from '../components/HeaderDono/index'

class TelaDono extends Component {
    static navigationOptions = { 
        title: 'PerfilPassageiro',
        header: null
      };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <Container>
                <Header style={{backgroundColor: '#ECBF06'}}>
                    <Body style={{alignItems: "center"}}>
                        <Title style={{color: "black"}}>Proprietário</Title>
                    </Body>
                </Header>
                <HeaderDono />            
            
                    <SignOutButton onPress={() => navigate('CadastroMotorista')} >
                        <SignOutButtonText>Cadastrar Motorista</SignOutButtonText>
                    </SignOutButton>

                    <SignOutButton onPress={() => navigate('CadastroVeiculo')} >
                        <SignOutButtonText>Cadastrar Frota</SignOutButtonText>
                    </SignOutButton>

                    <SignOutButton onPress={() => navigate('TelaListarMotorista')} >
                        <SignOutButtonText>Listar Motoristas</SignOutButtonText>
                    </SignOutButton> 
                    <SignOutButton onPress={() => navigate('TelaListarFrota')} >
                        <SignOutButtonText>Listar Frotas</SignOutButtonText>
                    </SignOutButton> 

                    
            </Container>
        );    
    }
}

export default TelaDono
