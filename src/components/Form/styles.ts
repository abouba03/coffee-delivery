import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 0 160px;
    display: flex;
    margin-bottom: 20px;
    gap: 5%;
    border: 1px solid red;
    @media (max-width: 1250px) {
        padding: 2% 2%;
        justify-content: space-between;
        
    }
    @media (max-width: 900px) {
        padding: 2% 2%;
        justify-content: center;
        flex-wrap: wrap;
        
    }
    


`
export const Left = styled.div`
    width: 55%;
    margin-right: 10px;

    @media (max-width: 900px) {
        margin-right: 0;
        
    }
    
    @media (max-width: 500px) {
        width: 90%;
        
    }
    
`
export const Info = styled.div`

    width: 100%;
    min-height: 372px;
    max-width: 640px;
    padding: 40px;
    background: var(--base-card);
    border-radius: 6px;
    
    ;
    .desc{
        padding-left: 32px;
        color: var(--);
    }
    .titre{
        display: flex;
        gap: 10px;
        align-items: center;
    }
    form{
        margin-top: 32px;
        display: flex;
        flex-wrap: wrap;
        padding: 0 40px;
        gap: 16px;
    }
    input{ 
            border: 1px solid var(--base-button);
            border-radius: 4px;
            background: var(--base-button);
            padding: 10px;
            transition: filter 1s;

            &:focus{
                border: 2px solid var(--yellow-dark);
                outline: none;
                filter: brightness(.9);
            }

            &::placeholder{
                padding: 2px;
                background: var(--base-button);
            }

    }
    .input-cep{
        width: 50%;
        height: 42px;
    }
    .input-rua{
        width: 90%;
        height: 42px;
    }
    .input-numero{
        width: 60%;
        height: 42px;
    }
    .input-bairro{
        width: 80%;
        height: 42px;
    }
    .input-cidade{
        width: 60%;
        height: 42px;
    }
    .input-uf{
        width: 30%;
        height: 42px;
    }

        
        


`
export const Pagamento = styled.div`
    width: 100%;
    min-height: 207px;
    max-width: 640px;
    padding: 30px;
    border-radius: 6px;
    background: var(--base-card);
    margin-top: 12px;
    
    ;
    .desc{
        padding-left: 32px;
        color: var(--base-subtitle);
    }
    .titre, a{
        display: flex;
        gap: 10px;
        align-items: center;
        
    } 
    .tipos-pagamento{
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        margin: 32px 0 ;
    }
    .btn{
        display: flex;
        justify-content: start;
        padding: 14px;
        align-items: center;
        width: 178px;
        height: 51px;
        gap: 11px;
        background: var(--base-button);
        border-radius: 6px;
        cursor: pointer;
    }
    .btn:hover{
        border: 1px solid var(--purple);
        background: var(--purple-light);
    }
    .btn p{
        font-size: 0.9rem;
    }
    .vibration:hover {
        animation: vibrate 0.5s ease-in-out infinite;
    }
`

export const Right = styled.div`
    width: 45%;
  
    @media (max-width: 900px) {
        margin-top: 20px;
        width: 80%;
       
        
    }
`

export const Card = styled.div`


    width: 100%;
    height: 498px;
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
export const Content = styled.div`
position: relative;
display: flex;
justify-content: start;
height:80px;
gap: 20px;

width: 100%;
align-items: center;
.icon:hover{
    animation-name: scale;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    cursor: pointer;
}

.imgCoffee{
    width: 64px;
}

.card-info{
    display: flex;
    flex-direction: column;
}
.zoneUpdate{
    display: flex;
    gap: 8px;
}
.preco{
    position: absolute;
    right: 4px;
    top: 8px;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    color: var(--)
}
.counter{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 72px;
    height: 38px;
    background: var(--base-button);
    border-radius: 6px;
}
.delete-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    gap: 4px;
    background: var(--base-button);
    border-radius: 6px;
    cursor: pointer;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 160%;
        text-transform: uppercase;
        color: var(--base-text); 
    }
}
@media (max-width: 430px) {
    .preco{
        position: absolute;
        right: 4px;
        top: -5px;
        font-size:80% ;
        color: var(--)
    }
    }

`
export const Trasso = styled.div `
    width: 100%;
    height: 0px;
    border: 1px solid var(--base-button);
`
    
export const Totals = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 13px;
    


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

    a{
        text-decoration: none;
        color: white;
    }
`
