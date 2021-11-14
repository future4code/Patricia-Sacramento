import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { MenuBar, GenericContainer, Lists, FormContainer } from "./styled";


export function LoginPage () {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [token, setToken] = useState("")

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
       axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/patricia-sacramento-banu/login", body)
        .then((response) => {
            setToken(response.data.token)
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
                    onChange={onChangeEmail} />

                    <input 
                    type="password"
                    placeholder={"Senha"} 
                    value={senha}
                    onChange={onChangeSenha}/>

                    <button onClick={login}>Entrar</button>
                </FormContainer>

            </Lists>
            <MenuBar>
                <button onClick={() => {navigate(-1)}}>Voltar</button>
            </MenuBar>
        </GenericContainer>
    )
}