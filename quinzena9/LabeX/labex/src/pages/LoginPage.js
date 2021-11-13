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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 20vh;
    width: 40vw;
    padding: 2%;
    border: 1px solid black;
    background-color: lightseagreen;
    font-size: large;
    margin-top: 2%;
    padding: 2%;
    >button{
        height: 20%;

    }
`

export function LoginPage () {

    const navigate = useNavigate()

    return (
        <ContainerListTrips> 
            <ListTrips>
                <h2>LOGIN</h2>
                <ContainerViagem>
                    <input placeholder={"E-mail"} />
                    <input placeholder={"Senha"} />
                    <button>Entrar</button>
                </ContainerViagem>

            </ListTrips>
            <MenuLateral>
                <button onClick={() => {navigate(-1)}}>Voltar</button>
            </MenuLateral>
        </ContainerListTrips>
    )
}