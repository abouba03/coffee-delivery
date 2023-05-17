import styled from "styled-components"

export const Container = styled.div`
    padding: 0 160px;
    margin-top: 64px;
    width: 100%;

    h2{
        margin: 70px 0 4px 0;
        font-size: 32px;
    }
   

    @media (max-width: 1250px) {
        padding: 0% 2%;
    }
`

export const Coffees = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 64px;
    width: 100%;
    gap: 22px;
`