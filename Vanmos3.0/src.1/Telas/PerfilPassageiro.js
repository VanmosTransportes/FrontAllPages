//Tela com as informações do passageiro
import React, { Component } from 'react'

import {
    Container,
    Nav,
    NavItem,
    NavText,
    SignOutButton,
    SignOutButtonText
} from './styles/passageiro'

import {
     Header,
     Body,
     Title
} from 'native-base'

import Icon from 'react-native-vector-icons/MaterialIcons'
import HeaderPassageiro from '../components/Header/index'

class PerfilPassageiro extends Component {
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
                        <Title style={{color: "black"}}>Seu Perfil</Title>
                    </Body>
                </Header>
                <HeaderPassageiro />            
                    <SignOutButton onPress={() => navigate('PerfilUser')} >
                        <SignOutButtonText>Perfil</SignOutButtonText>
                    </SignOutButton> 
                    
                    <SignOutButton onPress={() => navigate('TelaListaVans')} >
                        <SignOutButtonText>Lista de Vans</SignOutButtonText>
                    </SignOutButton> 

                    <SignOutButton onPress={() => navigate('TelaMarcarViagemPassageiro')} >
                        <SignOutButtonText>Marcar Viagens</SignOutButtonText>
                    </SignOutButton>

                    <SignOutButton onPress={() => navigate('TelaAjuda')} >
                        <SignOutButtonText>Ajuda</SignOutButtonText>
                    </SignOutButton>   
            </Container>
        );    
    }
}

export default PerfilPassageiro