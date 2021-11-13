import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";


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
const Candidatos = styled.div`
   margin: 0 auto;
    >h3{
        text-align: center;
    } 
`

const ContainerCandidatoPendente = styled.div `
    height: 40vh;
    width: 40vw;
    padding: 1%;
    border: 1px solid black;
    background-color: lightseagreen;
    font-size: large;
    margin-top: 2%;
`
const ContainerCandidatoAprovado = styled.div `
    height: 10vh;
    width: 40vw;
    padding: 1%;
    border: 1px solid black;
    background-color: lightseagreen;
    font-size: large;
    margin-top: 2%;
`

export function TripDetailsPage () {

    const navigate = useNavigate()

    return (
        <ContainerListTrips> 
            <ListTrips>
                <h2>VIAGEM 1</h2>
                <ContainerViagem>
                    <p><b>Nome:</b></p>
                    <p><b>Descrição: </b></p>
                    <p><b>Planeta: </b></p>
                    <p><b>Duração: </b></p>
                    <p><b>Data: </b></p>
                </ContainerViagem>
                <Candidatos>
                    <h3>CANDIDATOS PENDENTES</h3>
                    <ContainerCandidatoPendente>
                        <p><b>Nome:</b></p>
                        <p><b>Profissão: </b></p>
                        <p><b>Idade: </b></p>
                        <p><b>País: </b></p>
                        <p><b>Texto de Candidatura: </b></p>
                    </ContainerCandidatoPendente>
                    <h3>CANDIDATOS APROVADOS</h3>
                    <ContainerCandidatoAprovado>
                        <p><b>Nome:</b></p>
                    </ContainerCandidatoAprovado>
                </Candidatos>
            </ListTrips>
            <MenuLateral>
                <button onClick={() => {navigate(-1)}}>Voltar</button>
                <button>Logout</button>
            </MenuLateral>
        </ContainerListTrips>
    )
}