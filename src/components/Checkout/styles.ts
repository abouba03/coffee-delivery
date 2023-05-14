import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
`

export const CheckoutInfo = styled.div`
    display: flex;
    flex-direction: column;
    /* p{
        font-size: 20px;
        line-height: 26px;
    } */
    .subtitle{
        margin: 4px 0 40px 0;}
    h2{
        font-weight: 800;
        font-size: 32px;
        line-height: 130%;
        color: var(--yellow-dark);
    }

    @media (max-width: 1000px) {
        width: fit-content;
       
    
    }
    @media (max-width: 360px) {
        h2{
            font-size: 30px;
        }
    }
`
export const InfoOrder = styled.div`
border: 1px solid var(--yellow-dark);
border-radius: 6px 36px;
padding: 40px;
display: flex;
flex-direction: column;
gap: 42px;
width: 526px;
height: 296px;

@media (max-width: 700px) {
        width: 100%;
        border: 1px solid red;
    }
    @media (max-width: 1000px) {
        width: 100%;
        justify-content: center;
        align-content: center;
    
    }
    
`
export const InfoItem = styled.div`
display: flex;
align-items: center;
gap: 12px;
p{}

.yellow{
    background: var(--yellow);
}
.purple{
    background: var(--purple)
}
.orange{
    background: var(--yellow-dark)
}
.icon{
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}
@media (max-width: 700px) {
        width: 100%;
       
    }
`
export const InfoItemDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 1px;

    p span{
        font-weight: 600;
    }
    
`