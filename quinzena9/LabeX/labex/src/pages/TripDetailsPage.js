import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { useProtectedPage } from "../hooks";
import { MenuBar, GenericContainer, Lists, TripAndCandidateContainer } from "./styled";
 

export function TripDetailsPage () {

    const navigate = useNavigate()
    const [trip, setTrip] = useState ({})
    const [approvedCandidates, setApprovedCandidates] = useState ([])
    const [candidates, setCandidates] = useState ([])
    const params = useParams()
    const id = params.id
   
    useProtectedPage()

    const getTripDetails = async (token, id) => {
        try {
            const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/patricia-sacramento-banu/trip/${id}`, {
                headers: {
                    auth: token
                }
        
            }) 
            setTrip(response.data.trip)
            setApprovedCandidates(response.data.trip.approved)
            setCandidates(response.data.trip.candidates) 

        } catch(error) {
            console.log(error.message)
        }

    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        getTripDetails(token, id)
     
    }, [])

    const tripDetails = (
         <TripAndCandidateContainer>
            <p><b>Nome: </b>{trip.name}</p>
            <p><b>Descrição: </b>{trip.description}</p>
            <p><b>Planeta: </b>{trip.planet}</p>
            <p><b>Duração: </b>{trip.durationInDays}</p>
            <p><b>Data:</b> {trip.date}</p>
        </TripAndCandidateContainer> 
    )

    const apvdCandidates = (
        <TripAndCandidateContainer>
            {approvedCandidates === [] ?  <p><b>Nome:</b> {approvedCandidates.name}</p> : "Não há candidatos aprovados" }
        </TripAndCandidateContainer>
    )
    
    const pendentCandidates = candidates.map((candidate) => {
        return <TripAndCandidateContainer key={candidate.id}>
            <p><b>Nome:</b> {candidate.name}</p>
            <p><b>Profissão: </b>{candidate.profession}</p>
            <p><b>Idade: </b>{candidate.age}</p>
            <p><b>País: </b>{candidate.country}</p>
            <p><b>Texto de Candidatura: </b>{candidate.applicationText}</p>
        </TripAndCandidateContainer>

    })

    const logout = () => {
        localStorage.clear("token")
        navigate("/login")
    }

    return (
        <GenericContainer> 
            <Lists>
                <h2>DETALHES DA VIAGEM</h2>
                {tripDetails}
               
                <h3>CANDIDATOS PENDENTES</h3>
                {pendentCandidates}
                <h3>CANDIDATOS APROVADOS</h3>
                {apvdCandidates}
            </Lists>
            <MenuBar>
                <button onClick={() => {navigate(-1)}}>Voltar</button>
                <button onClick={logout}>Logout</button>
            </MenuBar>
        </GenericContainer>
    )
}