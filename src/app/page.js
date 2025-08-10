"use client";

import styled from "styled-components"
import Header from "./components/Header"
import HqCard from "./components/HqCard";
import { useEffect, useState } from "react";
import { StyledComprar } from "./components/BotaoComprar";
import Footer from "./components/Footer";


const CardContainer = styled.div`
    padding: 100px 1rem 0 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;

    @media (min-width: 768px) {
      min-height: 100vh;
      padding: 100px 10rem 0 10rem;

      ${StyledComprar} {
        visibility: hidden;
      }
    }
`

export default function Home() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    async function fetchComics() {
      const res = await fetch("/api/comics");
      const data = await res.json();
      setComics(data.results || []);
    }
    fetchComics();
  }, [])

  return (
      <>
        <Header />
        <CardContainer>
          {comics.length > 0 ? (
            comics
            .filter(comic => comic.name && comic.name.trim() !== "")
            .slice(0, 10)
            .map((comic, index) => (
              <HqCard
                key={index}
                img={comic.image?.medium_url}
                titulo={comic.name}
                descricao={comic.description}
              />
            ))
          ) : (
            <p>Carregando quadrinhos...</p>
          )}
        </CardContainer>
        <Footer />
      </>
  )
}