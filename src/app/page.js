"use client";

import styled from "styled-components"
import Header from "./components/Header"
import HqCard from "./components/HqCard";
import { useEffect, useState } from "react";


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
              />
            ))
          ) : (
            <p>Carregando quadrinhos...</p>
          )}
        </CardContainer>
      </>
  )
}