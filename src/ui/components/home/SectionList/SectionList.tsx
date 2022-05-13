import React from 'react';
import { SectionListContainer } from './SectionList.styles';
import { Container } from '@material-ui/core';

const SectionList = () => {
    return (
        <SectionListContainer>
            <Container>
                Ambiente Seguro <i className={'twf-lock'} />
            </Container>
        </SectionListContainer>
    );
}

export default SectionList;