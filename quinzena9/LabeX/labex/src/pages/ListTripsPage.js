import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../constants";
import { MenuBar, GenericContainer, Lists, TripAndCandidateContainer, GenericButton } from "../pages/styled";



export function ListTripsPage () {

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

    useEffect(() => {
        getTrips()
    }, [])

    const listTripsMap = trips.map((trip) => {
        return <TripAndCandidateContainer key={trip.id}>
            <p><b>Nome: </b>{trip.name}</p>
            <p><b>Descrição: </b>{trip.description}</p>
            <p><b>Planeta: </b>{trip.planet}</p>
            <p><b>Duração: </b>{trip.durationInDays}</p>
            <p><b>Data:</b> {trip.date}</p>
        </TripAndCandidateContainer>
    })

    return (
        <GenericContainer> 
            <Lists>
                <h2>VIAGENS</h2>
                {listTripsMap}
            </Lists>
            <MenuBar>
                <GenericButton onClick={() => {navigate(-1)}}>Voltar</GenericButton>
                <GenericButton onClick={() => {navigate("/trips/application")}}>Inscreva-se</GenericButton>
            </MenuBar>
        </GenericContainer>
    )
}