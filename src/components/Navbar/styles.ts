import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    padding: 32px 160px;
    display: flex;
    justify-content: space-between;

    
    img:hover{
        animation-name: scale 4;
        animation-duration: 1s;
        cursor: pointer;
    }

    @media (max-width: 1250px) {
        padding: 2% 2%;
        
    }



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
        background: var(--purple-light);
        width: 143px;
        height: 38px;
        border-radius: 6px;

        p{
            color: var(--purple-dark);
            font-size: 15px;
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
        cursor: pointer;
        position: relative;
    }
    .bulle{
        background: var(--yellow-dark);
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        top: -9px;
        right: -8px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
`