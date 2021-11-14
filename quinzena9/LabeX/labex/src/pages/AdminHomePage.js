import React, {useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { useProtectedPage } from "../hooks";
import { MenuBar, GenericContainer, Lists, AdminTripContainer } from "./styled";


export function AdminHomePage () {

    const navigate = useNavigate()

    const [trips, setTrips] = useState ([])

    const getTrips = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/patricia-sacramento-banu/trips")
        .then((response) => {
            setTrips(response.data.trips)
        }).catch(() => {
            alert("Algo deu errado! Tente novamente mais tarde!")
        })
    }

    useProtectedPage()

    useEffect(() => {
        getTrips() 

    }, [])


    const goToTripDetailsPage = (id) => {
        navigate(`/admin/trips/${id}`)
    }

    const listTripsAdmin = trips.map((trip) => {
        return <AdminTripContainer key={trip.id} onClick={() => {goToTripDetailsPage(trip.id)}}>
            <p><b>Nome: </b>{trip.name}</p>
            <button>Deletar</button>
        </AdminTripContainer>
    })

    const logout = () => {
        localStorage.clear("token")
        navigate("/login")
    }

    return (
   
        <GenericContainer> 
            <Lists>
                <h2>PAINEL ADMINISTRATIVO</h2>
                {listTripsAdmin}
            </Lists>
            <MenuBar>
                <button onClick={() => {navigate(-1)}}>Voltar</button>
                <button onClick={() => {navigate("/admin/trips/create")}}>Criar Viagem</button>
                <button onClick={logout}>Logout</button>
            </MenuBar>
        </GenericContainer>
    )
}