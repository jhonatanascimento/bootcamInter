import React from "react";


const buttonA = <button>Historico de Clientes</button>
const buttonB = <button>Segundo Botão</button>
const hasCustomer = false;


function App(){
    return(
        <div>
         <h1>Hello World</h1>
         {hasCustomer &&(
             <div>
                 Clique no botão abaixo para visualizar o historico dos Clientes 
                 <br/>
                 {buttonA}
             </div>
         )}    
        </div>
         
    )

}


export default App;