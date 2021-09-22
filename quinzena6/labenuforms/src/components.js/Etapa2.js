import React from "react";
import styled from "styled-components";



class Etapa2 extends React.Component{
    
    render (){
        return(
            <div>
                <h2>ETAPA 2 - INFORMAÇÕES EDUCACIONAIS</h2>
                <p>Caso tenha marcado Ensino Superior Incompleto ou Ensino Superior Completo: </p>
                <p> 5. Qual o curso? </p>
                <input name={'curso'} />
                <p> 6. Qual a unidade de ensino?</p>
                <input name={'unidade de ensino'} />
            </div>
        )
    }
}

export default Etapa2