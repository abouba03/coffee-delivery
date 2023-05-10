import styled from "styled-components"

export const Container = styled.section`
    margin-top: 64px;
    width: 100%;
    padding: 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;



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
    
`
export const Items = styled.div`
    display: grid;
    margin-top: 50px;
    grid-template-columns: repeat(2, 1fr);
    justify-content: start;
    align-items: center;
    
    p{
        font-size: 16px;
        line-height: 20px;
    }

    .item{
        margin-top: 20px;
        display: flex;
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
        width: 32px;
        height: 32px;
        display: flex;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
    }
    
`
