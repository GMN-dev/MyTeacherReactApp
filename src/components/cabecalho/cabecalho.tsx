import { CabecalhoHeader, Logo } from "./cabecalho.style"

const Cabecalho = () => {
    return (
        <CabecalhoHeader>
            <div>
                <Logo src="/imagens/myteacher.png" />
            </div>
            
            <p>Encontre o Professor Perfeito</p>
        </CabecalhoHeader>
    )
}


export default Cabecalho