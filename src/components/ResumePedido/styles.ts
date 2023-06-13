import styled from "styled-components"

export const Container = styled.div`

`

export const Card = styled.div`


    width: 100%;
    height: fit-content;
    background: var(--base-card);
    border-radius: 6px 44px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 24px;

    @media (max-width: 900px) {
        justify-self: center;
        
    }
    @media (max-width: 540px) {
        padding: 40px 5px;
    }

`

export const Totals = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 13px;
    animation: slideOut 1.5s ease-in-out;
    p{
        animation: bounce 1s ease-in-out 3s 1;
    }

    .line{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center; 
    }
    .total p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 130%;
        display: flex;
        align-items: center;
        text-align: right;
        color: var(--base-subtitle);
        
    }
`
export const Submit = styled.div `
    width: 100%;
    height: 46px;
    background: var(--yellow);
    color: var(--background);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    gap: 4px;
    border-radius: 6px;
    text-decoration: none;
    animation: slideOut 1.5s ease-in-out;
    a{
        text-decoration: none;
        color: white;
        animation: shake .1s ease-in-out 6s 7;
    }
`
