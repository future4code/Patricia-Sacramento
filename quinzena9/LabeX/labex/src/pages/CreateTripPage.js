import React from "react";
import { useNavigate } from "react-router";
import { useProtectedPage } from "../hooks";
import { MenuBar, GenericContainer, Lists, FormCreateTrip } from "../pages/styled";


export function CreateTripPage () {

    const navigate = useNavigate()

    useProtectedPage()

    const logout = () => {
        localStorage.clear("token")
        navigate("/login")
    }

    return (
        <GenericContainer> 
            <Lists>
                <h2>CRIAR VIAGEM</h2>
                <FormCreateTrip>
                    <input placeholder={"Nome"}></input>
                    <input placeholder={"Planeta"}></input>
                    <input placeholder={"Data"}></input>
                    <input placeholder={"Descrição"}></input>
                    <input placeholder={"Duração"}></input>
                    
                    <button>Criar</button>
                </FormCreateTrip>
            </Lists>
            <MenuBar>
                <button onClick={() => {navigate(-1)}}>Voltar</button>
                <button onClick={logout}>Logout</button>
            </MenuBar>

        </GenericContainer>
    )
}