import React from 'react';
import { TitleContainer, TitleStyled } from './Title.styles';

interface TitleProps{
    title: string;
    subtitle: string;
}

const Title: React.FC<TitleProps> = (props) => {
    return (
        <TitleContainer>
            <TitleStyled> {props.title}</TitleStyled>
           
            {props.subtitle}
        </TitleContainer>
           
      
    );
}

export default Title;