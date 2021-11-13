import React from "react";
import styled from "styled-components";
import { BrowserRouter as Routes, Route } from "react-router-dom";


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
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15vh;
    width: 40vw;
    padding: 1%;
    border: 1px solid black;
    background-color: lightseagreen;
    font-size: large;
    margin-top: 2%;
    padding: 2%;
    >button{
        height: 40%;

    }
`

export function AdminHomePage () {
    return (
        <ContainerListTrips> 
            <ListTrips>
                <h2>PAINEL ADMINISTRATIVO</h2>
                <ContainerViagem>
                    <p><b>Nome:</b></p>
                    <button>Deletar</button>
                </ContainerViagem>
                <ContainerViagem>
                    <p><b>Nome:</b></p>
                    <button>Deletar</button>
                </ContainerViagem>
            </ListTrips>
            <MenuLateral>
                <button>Voltar</button>
                <button>Criar Viagem</button>
                <button>Logout</button>
            </MenuLateral>
        </ContainerListTrips>
    )
}