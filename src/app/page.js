"use client";

import styled from "styled-components"
import Header from "./components/Header"


const CardContainer = styled.div`
    padding: 100px 1rem 0 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;

    @media (min-width: 768px) {
        padding: 100px 10rem 0 10rem;
    }
`

export default function Home() {
    return (
        <>
            <Header />
            <CardContainer>

            </CardContainer>
        </>
    )
}