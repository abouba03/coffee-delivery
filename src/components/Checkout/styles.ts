import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    padding: 0 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;

    .imgDelivery{
        width: 492px;
        height: 293px;
        margin-top: 125px;
        
    }
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
    
`
export const InfoItem = styled.div`
display: flex;
align-items: center;
gap: 12px;

.icon{
    background: red;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
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