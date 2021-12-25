import { useRouter } from "next/router"

export default function buscar(){
    const router = useRouter()
    const codigo = router.query.codigo

    return(
        <div>Buscar</div>
    )
}