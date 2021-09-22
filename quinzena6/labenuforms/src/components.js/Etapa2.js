import React from "react";
import styled from "styled-components";



class Etapa2 extends React.Component{
    render (){
        return(
            <div>
                <h2>ETAPA 2 - INFORMAÇÕES EDUCACIONAIS</h2>
                <p> 1. Qual o curso? </p>
                <input name={'curso'} />
                <p> 2. Qual a unidade de ensino?</p>
                <input name={'unidade de ensino'} />
            </div>
        )
    }
}

export default Etapa2