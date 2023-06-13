import styled from "styled-components"

export const Container = styled.section`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    
    background-image: url("../");
    .imgHeader{
        animation: slideOut 1.5s ease-in-out;
    }

    @media (max-width: 880px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
        
    }
    @media (max-width: 600px) {
        .imgHeader{
            width: 100%;
        }
        
        
    }
    
`
export const Main = styled.div`
    max-width: 588px;
    h1{
        text-align: start;
        font-size: 48px;
        line-height: 62px;
        margin-bottom: 16px;
        animation: bounce 1s ease-in-out 1s 1;
    }
    .subtitle{
        animation: bounce 1s ease-in-out 1.4s 1;
    }
    p{
        font-size: 20px;
        line-height: 26px;
        text-align: start;
    }
    @media (max-width: 600px) {
       h1, .subtitle{
        text-align: center;     
    } 
    h1{
        font-size: 32px;
        line-height: 42px;
        
    }
    }
    animation: slideIn 1.5s ease-in-out;
`
export const Items = styled.div`
    display: grid;
    margin-top: 50px;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;

    
    p{
        font-size: 1rem;
        line-height: 20px;
    }

    .item{
        margin-top: 20px;
        display: flex;
        width: 100%;
        
        align-items: center;
        gap: 12px;
        animation: bounce 1s ease-in-out 1.9s 1;
    }
    .item1{
        background: var(--yellow-dark) ;
    }
    .item2{
        background: var(--base-text) ;
    }
    .item3{
        background: var(--yellow) ;
    }
    .item4{
        background: var(--purple);
    }
    .itemImg{
        min-width: 32px;
        height: 32px;
        display: flex;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 600px) {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-top: 20px;

        align-items: center;
        padding: 0% 25%;
        
    }
    
`
