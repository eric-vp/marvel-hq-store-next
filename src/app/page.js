"use client";

import styled from "styled-components"
import Header from "./components/Header"
import HqCard from "./components/HqCard";


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
              {Array.from({ length: 10 }).map((_, index) => (
                <HqCard
                  key={index}
                  img="https://m.media-amazon.com/images/I/71mDEdjcyuL._SL1069_.jpg"
                  titulo={`Titulo ${index + 1}`}
                />
              ))}
              {/* <HqCard img={`https://m.media-amazon.com/images/I/71mDEdjcyuL._SL1069_.jpg`} titulo={`Titulo`}/> */}
            </CardContainer>
        </>
    )
}