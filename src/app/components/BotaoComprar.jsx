import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice"
import { ShoppingCart } from "lucide-react"
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

export default function BotaoComprar({ item }) {
    const dispatch = useDispatch();

    return(
        <StyledComprar data-testid="hq-comprar" onClick={() => dispatch(addToCart(item))}>
            <ShoppingCart />
            <span>Comprar</span>
        </StyledComprar>
    )
}