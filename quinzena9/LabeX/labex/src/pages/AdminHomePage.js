import React, {useEffect, useState } from "react";
import { useNavigate} from "react-router";
import axios from "axios";
import { useProtectedPage } from "../hooks";
import { BASE_URL } from "../constants";
import { MenuBar, GenericContainer, Lists, AdminTripContainer, GenericButton } from "./styled";


export function AdminHomePage () {

    const navigate = useNavigate()

    const [trips, setTrips] = useState ([])

    const getTrips = () => {
        axios.get(`${BASE_URL}/trips`)
        .then((response) => {
            setTrips(response.data.trips)
        }).catch(() => {
            alert("Algo deu errado! Tente novamente mais tarde!")
        })
    }

    useProtectedPage()

    const token = localStorage.getItem("token");

    useEffect(() => {
        getTrips() 

    }, [trips])


    const goToTripDetailsPage = (id) => {
        navigate(`/admin/trips/${id}`)
    }

    const deleteTrip = (id) => {
        
        axios.delete(`${BASE_URL}/trips/${id}`, {
            headers: {
                auth: token
            }
        })
        .then(() => {alert("Viagem deletada com sucesso!")})
        .catch(() => {alert("Algo deu errado! Tente novamente")})
    }

    const listTripsAdmin = trips.map((trip) => {
        return <AdminTripContainer key={trip.id} >
            <p onClick={() => {goToTripDetailsPage(trip.id)}}><b>Nome: </b>{trip.name}</p>
            <button onClick={() => {deleteTrip(trip.id)}}>Deletar</button>
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
                <GenericButton onClick={() => {navigate(-1)}}>Voltar</GenericButton>
                <GenericButton onClick={() => {navigate("/admin/trips/create")}}>Criar Viagem</GenericButton>
                <GenericButton onClick={logout}>Logout</GenericButton>
            </MenuBar>
        </GenericContainer>
    )
}