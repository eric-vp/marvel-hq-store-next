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

export default function HqCard({id, img, titulo, descricao}) {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const query = new URLSearchParams({
        id: (id).toString(),
        titulo: titulo,
        img: img,
        preco: 30.00,
        descricao: descricao ||  loremIpsum
    }).toString();

    console.log('Navegando para:', `/detalhes?${query}`);

    return (
        <StyledCard>
            <Link href={`/detalhes?${query}`}>
                <img src={img} alt={titulo} />
            </Link>
            <p>{titulo}</p>
            <StyledPreco>R$ 30,00</StyledPreco>
            <BotaoComprar item={{ id: id.toString(), titulo: titulo, preco: 30, img: img}}/>
        </StyledCard>
    )
}