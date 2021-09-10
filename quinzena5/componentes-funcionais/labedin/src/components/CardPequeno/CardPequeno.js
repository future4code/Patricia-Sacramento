import React from "react";
import styled from "styled-components";

const CardPequenoContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const ImgCardPequeno = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const TituloCardPequeno = styled.h4 `
    margin-bottom: 15px;
`

const DivCardPequeno = styled.div `
    display: flex;
    justify-items: flex-start;
`

const InfoCardPequeno = styled.p `
    padding-left: 3px;
`
function CardPequeno(props){
    return (
        <CardPequenoContainer>
            <ImgCardPequeno src={ props.imagem} />
            <DivCardPequeno>
                <TituloCardPequeno>{props.titulo}</TituloCardPequeno>
                <InfoCardPequeno>{props.info}</InfoCardPequeno>
            </DivCardPequeno>

        </CardPequenoContainer>
    )
}

export default CardPequeno;