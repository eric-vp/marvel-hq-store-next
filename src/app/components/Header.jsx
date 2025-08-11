import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useSelector } from "react-redux";
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
    font-size: 18px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 10;

    h1 {
        background-color: #ec1d24;
        padding: .1rem;
        color: #fff;
        font-weight: bold;
    }
`
const StyledContador = styled.div`
    position: relative;
    cursor: pointer;
`

const Badge = styled.span`
    position: absolute;
    top: -8px;
    right: -8px;
    background: #ec1d24;
    color: #fff;
    font-size: .7rem;
    font-weight: bold;
    border-radius: 50%;
    padding: 3px 6px;
    min-width: 20px;
    text-align: center;
    pointer-events: none;
`

export default function Header() {
    const totalHqs = useSelector((state) => 
        state.cart.items.reduce((acc, item) => acc + (item.quantidade || 1), 0)
    );

    return (
        <StyledHeader>
            <Link href="/">
                <h1>MARVEL HQ STORE</h1>
            </Link>
            <Link href="/carrinho">
                <StyledContador data-testid="carrinho" >
                    <ShoppingCart />
                    {totalHqs > 0 && <Badge>{totalHqs}</Badge>}
                </StyledContador>
            </Link>
        </StyledHeader>
    )
}