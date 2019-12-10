import React, { Component } from 'react'

import {
        Container,
        Nav,
        NavItem,
        NavText,
        SignOutButton,
        SignOutButtonText,
        Title
} from './styles/perfilUser'


import HeaderPassageiro from '../components/Header/index'

class PerfilUser extends Component {
    static navigationOptions = { 
        title: 'PerfilPassageiro',
        header: null
      };
    render(){
        return(
            <Container>
                <HeaderPassageiro />       
                <Title>Seu Perfil</Title>          
                <Nav>
                    <NavItem>
                        <NavText>Matheus Dalenga</NavText>
                    </NavItem>
                    <NavItem>
                        <NavText>(41) 9 8772-2774</NavText>
                    </NavItem>
                    <NavItem>
                        <NavText>dalenga@gmail.com</NavText>
                    </NavItem>
                    <NavItem>
                        <NavText>120.234.548-73</NavText>
                    </NavItem>
                </Nav>

                <SignOutButton onPress={() => {}}>
                    <SignOutButtonText>Sair do App</SignOutButtonText>
                </SignOutButton>

            </Container>
        );    
    }
}

export default PerfilUser