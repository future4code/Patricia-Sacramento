import React from 'react';
import styled from 'styled-components';

const CardGrandeContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const ImgCardGrande = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const NomeCardGrande = styled.h4 `
    margin-bottom: 15px;
`

const DivCardGrande = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const DescricaoCardGrande = styled.p `
    padding-left: 3px;
`

function CardGrande(props) {
    return (
        <CardGrandeContainer>
            <ImgCardGrande src={ props.imagem } />
            <DivCardGrande>
                <NomeCardGrande>{ props.nome }</NomeCardGrande>
                <DescricaoCardGrande>{ props.descricao }</DescricaoCardGrande>
            </DivCardGrande>
        </CardGrandeContainer>
    )
}

export default CardGrande;