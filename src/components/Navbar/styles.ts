import styled from "styled-components";

export const Container = styled.nav`
    max-width: 100%;
    padding: 32px 160px;
    display: flex;
    justify-content: space-between;
    

    
`
export const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .localisation{
        display: flex;
        gap: 7px;
        justify-content: center;
        align-items: center;
        background: #ebe5f9;
        width: 143px;
        height: 38px;
        border-radius: 6px;

        p{
            color: #4b2995;
            font-size: 14px;
        }
    }


    .panier{
        width: 38px;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f1e9c9;
        border-radius: 6px;
    }
`