import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import styled from "styled-components";
import { Trash } from "lucide-react";

const StyledCard = styled.div`
    padding: 1rem;
    border: 1px solid #aaa;
    border-radius: 20px;

    display: flex;
    gap: 2rem;

    img {
        max-width: 80px;
    }
`

const StyledPreco = styled.p`
    font-weight: bold;
    font-size: 22px;
`

const BotaoRemover = styled.button`
    border: none;
    border-radius: 5px;
    background: #c2181e;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    align-self: flex-start;
    justify-self: flex-end;
    padding: .5rem;
`

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-grow: 10;
    gap: 1rem;  

    div {
        flex-grow: 10;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export default function CarrinhoCard({id, img, titulo, preco, quantidade}) {
    const dispatch = useDispatch();

    return(
        <StyledCard>
            <img src={img} alt={titulo} />
            <InfoContainer>
                <div>
                    <p>{titulo}</p>
                    <StyledPreco>R$ {parseFloat(preco).toFixed(2).replace('.', ',')}</StyledPreco>
                    <p>Quantidade: {quantidade}</p>
                </div>
                <BotaoRemover onClick={() => dispatch(removeFromCart(id))}>
                    <Trash />
                    Remover
                </BotaoRemover>
            </InfoContainer>
        </StyledCard>
    )
}