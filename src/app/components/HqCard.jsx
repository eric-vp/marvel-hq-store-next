import Link from "next/link"
import styled from "styled-components"
import BotaoComprar, {StyledComprar} from "./BotaoComprar"

const StyledCard = styled.div`
    padding: 1rem;
    border-radius: 10px;
    max-width: calc(50% - 1rem);
    display: flex;
    flex-direction: column;
    flex: 1 1 calc(50% - 1rem);
    align-items: flex-start;
    gap: .5rem;
    transition: .2s;
    
    &:hover {
        box-shadow: 0 5px 20px 0px #ddd;
    }

    @media (min-width: 768px) {
        flex: 1 1 calc(20% - 1rem);
        max-width: calc(20% - 1rem);

        &:hover ${StyledComprar} {
            visibility: visible;
        }
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

export default function HqCard({index, img, titulo}) {
    return (
        <StyledCard>
            <Link href={`/detalhes?id=${index + 1}`}>
                <img src={img} alt={titulo} />
            </Link>
            <p>{titulo}</p>
            <StyledPreco>R$ 30,00</StyledPreco>
            <BotaoComprar />
        </StyledCard>
    )
}