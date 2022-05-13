import { styled } from '@material-ui/core';



export const UserInformationContainer = styled('div')`
    width: 300px;
    margin: 20px;
    display: inline-block;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;

    ${({theme}) => theme.breakpoints.up('md')}{
        max-width: 400px;
    }
    
`;


export const CardMedia = styled('img')`
    width: 280px;
`;
/*
export const AvatarStyled = styled(Avatar)`

`;
*/