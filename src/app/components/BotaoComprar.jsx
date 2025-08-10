import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import styled from "styled-components"

export const StyledComprar = styled.button`
    border: none;
    background: #ec1d24;
    color: #fff;
    border-radius: 5px;
    padding: .5rem;
    font-size: 18px;
    transition: .2s;
    align-self: center;

    display: flex;
    gap: .5rem;
    justify-content: center;
    align-items: center;

    &:hover {
        border: none;
        background: #c2181e;
        color: #fff;
        cursor: pointer;
    }
`

export default function BotaoComprar() {
    return(
        // <Link href={`/carrinho`}>
            <StyledComprar>
                <ShoppingCart />
                <span>Comprar</span>
            </StyledComprar>
        // </Link>
    )
}