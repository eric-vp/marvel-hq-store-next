import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import styled from "styled-components"

const StyledHeader = styled.header`
    padding: 0 2rem;
    background-color: #222;
    color: #fff;
    font-size: 22px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    height: 50px;

    p {
        background-color: #ec1d24;
        padding: .1rem;
        color: #fff;
        font-weight: bold;
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <Link href="/">
                <p>MARVEL HQ STORE</p>
            </Link>
            <Link href="/carrinho">
                <ShoppingCart />
            </Link>
        </StyledHeader>
    )
}