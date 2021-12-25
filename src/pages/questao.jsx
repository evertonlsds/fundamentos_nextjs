export default function questao(){
    fetch('http://localhost:3000/api/questao/3333')
        .then(resp => resp.json())
        .then(json => console.log(json))
    return(
        <div>
            <h1>Questao</h1>
        </div>
    )
}