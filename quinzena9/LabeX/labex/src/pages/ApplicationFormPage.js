import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";


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
    text-align: center;
    padding-top: 5%;
`

export function ApplicationFormPage () {

    const navigate = useNavigate()
    return (
        <ContainerApplicationForm> 
            <ContainerForm>
                <h2>INSCREVA-SE</h2>
                <Form>
                    <select>
                        <option>Escolha uma viagem</option>
                    </select>
                    <input placeholder={"Nome"}></input>
                    <input placeholder={"Idade"}></input>
                    <input placeholder={"Texto de Candidatura"}></input>
                    <input placeholder={"Profissão"}></input>
                    <select>
                        <option>Escolha um país</option>
                    </select>
                    <button>Enviar</button>
                </Form>
            </ContainerForm>
            <MenuLateral>
                <button onClick={() => {navigate(-1)}}>Voltar</button>
            </MenuLateral>

        </ContainerApplicationForm>
    )
}