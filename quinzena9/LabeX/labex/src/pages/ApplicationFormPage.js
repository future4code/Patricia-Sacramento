import React from "react";
import { useNavigate } from "react-router";
import { MenuBar, GenericContainer, Lists, FormCreateTrip } from "./styled";


export function ApplicationFormPage () {

    const navigate = useNavigate()
    return (
        <GenericContainer> 
            <Lists>
                <h2>INSCREVA-SE</h2>
                <FormCreateTrip>
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
                </FormCreateTrip>
            </Lists>
            <MenuBar>
                <button onClick={() => {navigate(-1)}}>Voltar</button>
            </MenuBar>

        </GenericContainer>
    )
}