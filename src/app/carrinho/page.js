"use client";

import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import CarrinhoCard from "../components/CarrinhoCard";

const StyledMain = styled.main`
padding: 100px 1rem 3rem 1rem;
    min-height: calc(calc(100vh - 80px));
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 768px) {
        min-height: calc(100vh - 80px);
        padding: 100px 20rem 5rem 20rem;
    }
`

const StyledCardContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const StyledValorTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    p {
        font-size: 1.2rem;
        font-weight: bold;
    }

    @media (min-width: 768px) {
        justify-content: flex-start;
    }
`

export default function Carrinho() {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const total = items.reduce((acc, item) => {
        const precoNum = Number(item.preco) * item.quantidade || 0;
        return acc + precoNum;
    }, 0)

    return (
        <>
            <Header />
            <StyledMain>
                <h2>Meu carrinho</h2>
                {items.length === 0 ? (
                    <p>Seu carrinho está vazio</p>
                ) : (
                    <>
                        <StyledCardContainer>
                            {items.map((item) => (
                                <CarrinhoCard
                                    key={item.id} 
                                    id={item.id}
                                    img={item.img}
                                    titulo={item.titulo}
                                    preco={30}
                                    quantidade={item.quantidade}
                                />
                            ))}
                        </StyledCardContainer>
                        <StyledValorTotal>
                            <span>Total do Pedido:</span>
                            <p>R$ {total.toFixed(2).replace('.', ',')}</p>
                        </StyledValorTotal>
                    </>
                )}
            </StyledMain>
            <Footer />         
        </>
    );
}