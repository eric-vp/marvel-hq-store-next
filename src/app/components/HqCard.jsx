import styled from "styled-components"

const StyledCard = styled.div`
    padding: 1rem;
    border-radius: 10px;
    max-width: calc(50% - 1rem);
    display: flex;
    flex-direction: column;
    flex: 1 1 calc(50% - 1rem);
    gap: .5rem;
    transition: .2s;

    &:hover {
        box-shadow: 0 5px 20px 0px #ddd;
    }

    @media (min-width: 768px) {
        flex: 1 1 calc(20% - 1rem);
        max-width: calc(20% - 1rem);
    }

    img {
        width: 100%;
        overflow: hidden;
    }
`
const StyledPreco = styled.p`
    font-size: 20px;
    font-weight: bold;
`

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

export default function HqCard({img, titulo}) {
    return (
        <StyledCard>
            {/* <img src="https://m.media-amazon.com/images/I/71mDEdjcyuL._SL1069_.jpg" alt="Capa batman 1" /> */}
            <img src={img} alt={titulo} />
            <p>{titulo}</p>
            <StyledPreco>R$ 30,00</StyledPreco>
            <StyledComprar>Comprar</StyledComprar>
        </StyledCard>
    )
}