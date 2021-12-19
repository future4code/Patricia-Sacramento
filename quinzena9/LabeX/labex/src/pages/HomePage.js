import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; 

const HomeContainer = styled.div` 
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80vh;

`
const BotaoPageViagens = styled.button` 
    height: 20vh;
    width: 15vw;
    background-color: lightseagreen;
    border: none;
    border-radius: 50%;
    font-size: large;
    color: white;
`
const BotaoPageLogin = styled.button` 
    height: 20vh;
    width: 15vw;
    background-color: lightseagreen;
    border: none;
    border-radius: 50%;
    font-size: large;
    color: white;
`

export function HomePage () {

    const navigate = useNavigate()

    return (
        <HomeContainer>
            <BotaoPageViagens onClick={() => {navigate("/trips/list")}}>Lista de Viagens</BotaoPageViagens>
            <BotaoPageLogin onClick={() => {navigate("/admin/trips/list")}}>Área Administrativa</BotaoPageLogin>
        </HomeContainer>
    )
}