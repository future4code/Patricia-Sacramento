import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router";
import { MenuBar, GenericContainer, Lists, TripAndCandidateContainer } from "../pages/styled";



export function ListTripsPage () {

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
                <button onClick={() => {navigate(-1)}}>Voltar</button>
                <button onClick={() => {navigate("/trips/application")}}>Inscreva-se</button>
            </MenuBar>
        </GenericContainer>
    )
}