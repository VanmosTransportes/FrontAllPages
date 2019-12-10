import React, { Component } from 'react';
import { 
    Content,
    ListItem,
    Body,
    Right,
    Switch
} from 'native-base';

import {
    Container,
    Text,
    SignOutButton
} from './styles'

export default class ListIconExample extends Component {
  render() {
    return (
      <Container>
        <Content>
            <SignOutButton style={{ backgroundColor: '#F9960A' }}>
               <Text>Confirmar Ida</Text>
            </SignOutButton>
            <SignOutButton style={{ backgroundColor: '#D7341B' }}>
                <Text>Informar Falta</Text>
            </SignOutButton>       
        </Content>
      </Container>
    );
  }
}