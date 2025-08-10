import Link from "next/link"
import styled from "styled-components"

const StyledComprar = styled.button`
    border: none;
    background: #ec1d24;
    color: #fff;
    border-radius: 5px;
    padding: .5rem;
    font-size: 18px;
    transition: .2s;
    align-self: center;

    &:hover {
        border: none;
        background: #c2181e;
        color: #fff;
        cursor: pointer;
    }
`

export default function BotaoComprar() {
    return(
        <Link href={`/carrinho`}>
            <StyledComprar>Comprar</StyledComprar>
        </Link>
    )
}