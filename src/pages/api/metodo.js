export default ( req, res) => {
    if(req.method === "GET"){
        res.status(200).json({nome: "Daniel"})
    }else{
        res.status(200).json({nome: "Liliane" })
    }
    
}