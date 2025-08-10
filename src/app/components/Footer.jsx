import styled from "styled-components"

const StyledFooter = styled.footer`
    width: 100%;
    height: 80px;
    /* padding: 2rem; */
    background: #222;
    color: #fff;

    position: relative;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Footer() {
    return (
        <StyledFooter>
            <p>
                Feito por Eric
            </p>
        </StyledFooter>
    )
}