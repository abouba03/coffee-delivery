import styled from "styled-components"

export const Container = styled.section`
    margin-top: 64px;
    width: 100%;
    padding: 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    @media (max-width: 1250px) {
        padding: 0% 2%;
        
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
        ine-height: 42px;
    }
    }
   
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
