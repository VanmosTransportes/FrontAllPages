import React, { Component } from "react";
import { 
    Content,
    Icon,
    Accordion,
    Text,
    View,
    Body
} from "native-base";

import { 
    Container,
    Title
} from './styles/listarFrotas'

import HeaderMot from '../components/HeaderMot/index'

const dataArray = [
  { title: "João da Silva", content: "CNH: 69418067904 / Categoria: D" },
  { title: "Marcos Castro", content: "CNH: 65379111029 / Categoria: D" },
  { title: "Luiz Yamada", content: "CNH: 65487353842 / Categoria: D" },
  { title: "Ector Luiz", content: "CNH: 23106597200 / Categoria: D" },
  { title: "Ediee Pinheiro", content: "CNH: 32310446118 / Categoria: D" },
  { title: "José de Carvalho", content: "CNH: 77417992351 / Categoria: D" }
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
        <HeaderMot style={{backgroundColor: '#ECBF06'}}>
                    <Body style={{alignItems: "center"}}>
                    <Title style={{color: "black"}}>Motoristas</Title>
                    </Body>
        </HeaderMot>
        <Title>Lista de Motoristas</Title>
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