import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";


const ContainerListTrips = styled.div`
    display: flex;
    margin: 0 2%;
    justify-content: space-between;

`
const ListTrips = styled.div `
   margin: 0 auto;
    >h2{
        text-align: center;
    }  
`
const MenuLateral = styled.div`
    height: 100vh;
    width: 10vw;
    border-left: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
    >button{
        margin-top: 15%;
    }
` 

const ContainerViagem = styled.div` 
    height: 40vh;
    width: 40vw;
    padding: 1%;
    border: 1px solid black;
    background-color: lightseagreen;
    font-size: large;
    margin-top: 2%;
`



export function ListTripsPage () {

    const navigate = useNavigate()

    return (
        <ContainerListTrips> 
            <ListTrips>
                <h2>VIAGENS</h2>
                <ContainerViagem>
                    <p><b>Nome:</b></p>
                    <p><b>Descrição: </b></p>
                    <p><b>Planeta: </b></p>
                    <p><b>Duração: </b></p>
                    <p><b>Data: </b></p>
                </ContainerViagem>
                <ContainerViagem>
                    <p><b>Nome:</b></p>
                    <p><b>Descrição: </b></p>
                    <p><b>Planeta: </b></p>
                    <p><b>Duração: </b></p>
                    <p><b>Data: </b></p>
                </ContainerViagem>
            </ListTrips>
            <MenuLateral>
                <button onClick={() => {navigate(-1)}}>Voltar</button>
                <button onClick={() => {navigate("/trips/application")}}>Inscreva-se</button>
            </MenuLateral>
        </ContainerListTrips>
    )
}