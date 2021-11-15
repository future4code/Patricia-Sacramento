import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { BASE_URL } from "../constants";
import { MenuBar, GenericContainer, Lists, FormContainer, GenericButton } from "./styled";


export function LoginPage () {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangeSenha = (event) => {
        setSenha(event.target.value)
    }

    const body = {
        "email": email,
        "password": senha
    }

    const login = () => {
       axios.post(`${BASE_URL}/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            navigate("/admin/trips/list")
            setEmail("")
            setSenha("")
        }).catch((error) => {console.log(error)})

    }

    return (
        <GenericContainer> 
            <Lists>
                <h2>LOGIN</h2>
                <FormContainer>
                    <input 
                    placeholder={"E-mail"}
                    value={email}
                    onChange={onChangeEmail} 
                    type="email"
                    required/>

                    <input 
                    type="password"
                    placeholder={"Senha"} 
                    value={senha}
                    onChange={onChangeSenha}
                    required/>

                    <button onClick={login}>Entrar</button>
                </FormContainer>

            </Lists>
            <MenuBar>
                <GenericButton onClick={() => {navigate(-1)}}>Voltar</GenericButton>
            </MenuBar>
        </GenericContainer>
    )
}