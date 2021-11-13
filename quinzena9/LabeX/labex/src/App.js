import React from "react";
import styled from "styled-components";
import { AdminHomePage } from "./pages/AdminHomePage";
import { ApplicationFormPage } from "./pages/ApplicationFormPage";
import { CreateTripPage } from "./pages/CreateTripPage";
import { HomePage } from "./pages/HomePage";
import { ListTripsPage } from "./pages/ListTripsPage";
import { LoginPage } from "./pages/LoginPage";
import { TripDetailsPage } from "./pages/TripDetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const Header = styled.header `
  max-height: 15vh;
  max-width: 100vw;
  border: 1px solid black;
  height: 15vh;
  background-color: black;
  color: white;
  text-align: start; 
  padding-left: 5%;
`
function App() {
  return (
    <div className="App">
      <Header>
        <h1>LABEX</h1>
      </Header>
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />     
          <Route exact path="/trips/list" element={<ListTripsPage />} />  
          <Route exact path="/trips/application" element={<ApplicationFormPage />} />  
          <Route exact path="/login" element={<LoginPage />} />      
          <Route exact path="/admin/trips/list" element={<AdminHomePage />} />       
          <Route exact path="/admin/trips/create" element={<CreateTripPage />} />       
          <Route exact path="/admin/trips/:id" element={<TripDetailsPage />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
