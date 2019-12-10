import React, { Component } from "react";
import { 
    Content,
    Icon,
    Accordion,
    Text,
    View,
    Body,
    Header
} from "native-base";

import { 
    Container,
    Title
} from './styles/listaVans'

import HeaderPass from '../components/Header/index'

const dataArray = [
  { title: "Companhia: My Company", content: "Origem: Agência Mirum /  Destino: Unifacear" },
  { title: "Companhia: Ultra Transportes", content: "Origem: Shopping Palladium /  Destino: UFPR" },
  { title: "Companhia: TransYukio", content: "Origem: Terminal Pinheirinho /  Destino: IFPR" }
];

export default class AccordionCustomHeaderContent extends Component {
  _renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#FFCA3A"
      }}>
      <Text style={{ fontWeight: "600" }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />}
      </View>
    );
  }
  _renderContent(item) {
    return (
      <Text
        style={{
          backgroundColor: "#fff",
          padding: 10,
          fontStyle: "italic",
        }}
      >
        {item.content}
      </Text>
    );
  }
  static navigationOptions = { 
    title: 'TelaListarFrontas',
    header: null
  };
  render() {
    return (
      <Container>
        <HeaderPass style={{backgroundColor: '#ECBF06'}}>
                    <Body style={{alignItems: "center"}} >
                      <Title style={{color: "black"}}>Frotas</Title>
                    </Body> 
        </HeaderPass>
        <Title>Vans</Title>
        <Content padder style={{ backgroundColor: "#FFA343" }}>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        </Content>
      </Container>
    );
  }
}
<br/>