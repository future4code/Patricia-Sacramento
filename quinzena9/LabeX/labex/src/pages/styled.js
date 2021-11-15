import styled from "styled-components";


export const Header = styled.header `
    max-height: 15vh;
    max-width: 100vw;
    border: 1px solid black;
    height: 15vh;
    background-color: black;
    color: white;
    text-align: start; 
    padding-left: 5%;
`

export const MenuBar = styled.div`
    min-height: 90vh;
    width: 10vw;
    border-left: 1px solid black;
    background-color: lightseagreen;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
    >button{
        margin-top: 15%;
    }
`

export const GenericContainer = styled.div`
    display: flex;
    margin: 0;
    justify-content: space-between;
`

export const Lists = styled.div `
    margin: 0 auto;
    >h2, h3{
        text-align: center;
    }  
`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 20vh;
    width: 40vw;
    padding: 2%;
    border: 1px solid black;
    background-color: lightseagreen;
    font-size: large;
    margin-top: 2%;
    padding: 2%;
    >button{
        height: 20%;

    }
`

export const FormCreateTrip = styled.form` 
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 50vh;
    width: 40vw;
    padding: 2%;
    border: 1px solid black;
    background-color: lightseagreen;
    font-size: large;
    margin-top: 5%;
    >button{
        align-self: center;
    }
`

export const AdminTripContainer = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15vh;
    width: 40vw;
    padding: 1%;
    border: 1px solid black;
    background-color: lightseagreen;
    font-size: large;
    margin-top: 2%;
    padding: 2%;
    >button{
        height: 40%;

    }
`

export const TripAndCandidateContainer = styled.div`
    height: 40vh;
    width: 40vw;
    padding: 1%;
    border: 1px solid black;
    background-color: lightseagreen;
    font-size: large;
    margin-top: 2%;

`

export const GenericButton = styled.button`
    background-color: lightseagreen;
    border: none;
    border-bottom: 3px solid black;
    width: 75%;
`