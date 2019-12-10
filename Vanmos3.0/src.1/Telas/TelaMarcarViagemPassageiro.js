import React, { Component } from 'react';
import { 
    Header,
    Content,
    DatePicker,
    Body
} from 'native-base';

import { 
  Container,
  Title,
  Text,
  SignOutButton
} from './styles/marcarViagemPassageiro'

import HeaderPassageiro from '../components/Header/index'
import List from '../components/List/index'

class DatePickerExample extends Component {
  static navigationOptions = {
      title: 'PerfilPassageiro',
      header: null
  }  
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#ECBF06'}}>
                <Body style={{alignItems: "center"}}>
                    <Title style={{color: "black"}}>Solicitar Corrida</Title>
                </Body>
        </Header>
        <HeaderPassageiro />
        <Title>Agende sua viagem</Title>
        <Content style={{ alignContent: "center" }}>
          <SignOutButton>
            <DatePicker
              defaultDate={new Date(2019, 4, 4)}
              minimumDate={new Date(2019, 1, 1)}
              maximumDate={new Date(2019, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Selecione a sua Data..."
              textStyle={{ color: "black" }}
              placeHolderTextStyle={{ color: "#000000" }}
              onDateChange={this.setDate}
              disabled={false}
            />
          </SignOutButton>  
          <Text>
            Data da Viagem: {this.state.chosenDate.toString().substr(4, 12)}
          </Text>
        </Content>
        <List />
      </Container>
    );
  }
}

export default DatePickerExample