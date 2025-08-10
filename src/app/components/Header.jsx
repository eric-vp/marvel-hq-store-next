import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import styled from "styled-components"

const StyledHeader = styled.header`
    width: 100%;
    height: 60px;
    padding: 0 2rem;
    background-color: #222;
    position: fixed;
    top: 0;
    
    color: #fff;
    font-family: var(--font-bebas-neue), sans-serif;
    font-size: 28px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 10;

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