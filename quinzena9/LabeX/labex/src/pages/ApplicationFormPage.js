import React, { useState } from "react";
import { useNavigate } from "react-router";
import { MenuBar, GenericContainer, Lists, FormCreateTrip, GenericButton } from "./styled";
import { BASE_URL } from "../constants";
import axios from "axios";
import { useEffect } from "react/cjs/react.development";


export function ApplicationFormPage () {

    const navigate = useNavigate()

    const [form, setForm] = useState(
        {
            name: "",
            age: "",
            applicationText: "",
            profession: "",
            country: ""
        }
    )

    const [id, setId] = useState("")

    const onChangeTrip = (event) =>{
        setId(event.target.value)
    }


    const [trips, setTrips] = useState ([])

    const getTrips = () => {
        axios.get(`${BASE_URL}/trips`)
        .then((response) => {
            setTrips(response.data.trips)
        }).catch(() => {
            alert("Algo deu errado! Tente novamente mais tarde!")
        })
    }

    useEffect(() => {
        getTrips()
    }, [])

    const selectTrip = trips.map((trip) => {
        return (<option value={trip.id}>{trip.name}</option>)
    })

    const onChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }


    const applyToTrip = (event) => {
        event.preventDefault()
        
        axios.post(`${BASE_URL}/trips/${id}/apply`, form)
        .then(() => {alert("Inscrição enviada!")})
        .catch(() => {alert("Algo deu errado! Tente novamente mais tarde")})         
    }

    return (
        
        <GenericContainer> 
            <Lists>
                <h2>INSCREVA-SE</h2>
                <FormCreateTrip onSubmit={applyToTrip}>
                    <select value={id} onChange={onChangeTrip}>
                        <option hidden>Escolha uma viagem</option>
                        {selectTrip}
                    </select>
                    <input 
                    placeholder={"Nome"} 
                    name="name" 
                    value={form.name} 
                    onChange={onChange} 
                    required />

                    <input 
                    placeholder={"Idade"} 
                    name="age" 
                    value={form.age} 
                    onChange={onChange}
                    type="number"
                    required />

                    <input 
                    placeholder={"Texto de Candidatura"} 
                    name="applicationText" 
                    value={form.applicationText} 
                    onChange={onChange}
                    required />

                    <input 
                    placeholder={"Profissão"}
                    name="profession" 
                    value={form.profession} 
                    onChange={onChange}
                    required />

                    <input 
                    placeholder={"País"} 
                    name="country" 
                    value={form.country} 
                    onChange={onChange}
                    required />
                 
                    <button type="submit">Enviar</button>
                </FormCreateTrip>
            </Lists>
            <MenuBar>
                <GenericButton onClick={() => {navigate(-1)}}>Voltar</GenericButton>
            </MenuBar>

        </GenericContainer>
    )
}