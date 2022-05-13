import React from 'react';
import { MenuTitleContainer, MenuTitleStyled } from './MenuTitle.styles';

interface MenuTitleProps{
    title: string;
    subtitle: string;
}

const MenuTitle: React.FC<MenuTitleProps> = (props) => {
    return (
        <MenuTitleContainer>
            <MenuTitleStyled> {props.title}</MenuTitleStyled>
           
            {props.subtitle}
        </MenuTitleContainer>
           
      
    );
}

export default MenuTitle;