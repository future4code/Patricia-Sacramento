import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const ContainerApplicationForm = styled.div`
    display: flex;
    margin: 0 2%;
    justify-content: space-between;
`

const Form = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 50vh;
    width: 40vw;
    padding: 2%;
    border: 1px solid black;
    background-color: lightseagreen;
    font-size: large;
    margin-top: 5%;
    >button{
        align-self: center;
    }
`
const ContainerForm = styled.div`
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

export function CreateTripPage () {
    return (
        <ContainerApplicationForm> 
            <ContainerForm>
                <h2>CRIAR VIAGEM</h2>
                <Form>
                    <input placeholder={"Nome"}></input>
                    <input placeholder={"Planeta"}></input>
                    <input placeholder={"Data"}></input>
                    <input placeholder={"Descrição"}></input>
                    <input placeholder={"Duração"}></input>
                    
                    <button>Criar</button>
                </Form>
            </ContainerForm>
            <MenuLateral>
                <button>Voltar</button>
                <button>Logout</button>
            </MenuLateral>

        </ContainerApplicationForm>
    )
}