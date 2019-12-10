import React from 'react'
import { Image } from 'react-native'
// import { Container, Title } from './styles'

import { Container, Top, Photo, Title } from './styles';

export default function Header(props){
    return(
        <Container>
            <Top>
                <Photo source={props.photo} />
                <Title>{props.name}</Title>
            </Top>
        </Container>
    );
}

Header.defaultProps = {
    name: 'My Company',
    photo: {uri: 'https://image.freepik.com/vetores-gratis/logotipo-do-carro-van_74218-33.jpg'}
}