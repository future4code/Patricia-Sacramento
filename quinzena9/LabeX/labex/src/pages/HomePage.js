import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

    const goToListTripsPage = () => {
        navigate("/list-trips")
    }

    const goToAdminHomePage = () => {
        navigate("/admin-home-page")
    }

    return (
        <HomeContainer>
            <BotaoPageViagens onClick={goToListTripsPage}>Lista de Viagens</BotaoPageViagens>
            <BotaoPageLogin onClick={goToAdminHomePage}>Área Administrativa</BotaoPageLogin>
        </HomeContainer>
    )
}