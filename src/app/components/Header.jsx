import styled from "styled-components"

const StyledHeader = styled.header`
    background-color: #222;
    color: #fff;
    font-size: 22px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    height: 50px;

    p {
        background-color: #ec1d24;
        /* background-color: var(--marvel_red); */
        padding: .1rem;
        color: #fff;
        font-weight: bold;
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <p>MARVEL HQ STORE</p>
        </StyledHeader>
    )
}