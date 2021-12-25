import { useState } from "react"

export default function form(){
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")

    function salvarUsuario(){
        fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({nome, idade})
        })
    }



    return(
        <div>
            <h1>Integrando com API #02</h1>
            <input type="text" value= {nome}
                onChange= {e => setNome(e.target.value)}/>
            <input type="number" value= {idade}
                onChange= {e => setIdade(+e.target.value)}/>
            <button onClick={salvarUsuario}>Enviar</button>    
        </div>
    )
}