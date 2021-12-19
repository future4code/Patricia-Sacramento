import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../constants";
import { useProtectedPage } from "../hooks";
import { MenuBar, GenericContainer, Lists, FormCreateTrip, GenericButton } from "../pages/styled";


export function CreateTripPage () {

    const navigate = useNavigate()

    useProtectedPage()

    const token = localStorage.getItem("token");

    const [form, setForm] = useState(
        {
            name: "",
            planet: "",
            date: "",
            description: "",
            durationInDays: ""
        }
    )

    const logout = () => {
        localStorage.clear("token")
        navigate("/login")
    }

    const onChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }


    useEffect(() => {
        localStorage.getItem("token");
     
    }, [])

    const createTrip = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post(`${BASE_URL}/trips`, form, {
                headers: {
                    auth: token
                }
            })
            alert("Viagem criada com sucesso!")

        } catch(error){
            console.log(error.message)
        }
    }

    return (
        <GenericContainer> 
            <Lists>
                <h2>CRIAR VIAGEM</h2>
                <FormCreateTrip onSubmit={createTrip}>
                    <input 
                    placeholder={"Nome"}
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required />

                    <input 
                    placeholder={"Planeta"}
                    name="planet"
                    value={form.planet}
                    onChange={onChange}
                    required />

                    <input 
                    placeholder={"Data"}
                    name="date"
                    value={form.date}
                    onChange={onChange}
                    required />

                    <input 
                    placeholder={"Descrição"}
                    name="description"
                    value={form.description}
                    onChange={onChange}
                    required />

                    <input 
                    placeholder={"Duração"}
                    name="durationInDays"
                    value={form.durationInDays}
                    onChange={onChange}
                    required/>
                    
                    <button type="submit">Criar</button>
                </FormCreateTrip>
            </Lists>
            <MenuBar>
                <GenericButton onClick={() => {navigate(-1)}}>Voltar</GenericButton>
                <GenericButton onClick={logout}>Logout</GenericButton>
            </MenuBar>

        </GenericContainer>
    )
}