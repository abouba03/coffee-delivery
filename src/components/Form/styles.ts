import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 0 160px;
    display: flex;
    margin-bottom: 50px;
    
`
export const Left = styled.div`
    width: 60%;
    
    
    
`
export const Info = styled.div`

    width: 100%;
    height: 372px;
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
        input{ 
            border: 1px solid var(--base-button);
            border-radius: 4px;
        }
        input::placeholder{
           padding: 12px;
           background: var(--base-card);
        }
        .input-cep{
            width: 200px;
            height: 42px;
        }
        .input-rua{
            width: 100%;
            height: 42px;
        }
        .input-numero{
            width: 200px;
            height: 42px;
        }
        .input-bairro{
            width: 250px;
            height: 42px;
        }
        .input-cidade{
            width: 200px;
            height: 42px;
        }
        .input-uf{
            width: 100px;
            height: 42px;
        }
    }
`
export const Pagamento = styled.div`
   width: 100%;
    height: 207px;
    max-width: 640px;
    padding: 40px;
    border-radius: 6px;
    background: var(--base-card);
    margin-top: 12px;
    
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
    }
    .btn p{
        font-size: 16px;
    }
`

export const Right = styled.div`
    width: 40%;
  
     
`

export const Card = styled.div`

    max-width: 448px;
    width: 100%;
    height: 498px;
    background: var(--base-card);
    border-radius: 6px 44px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 24px;


`
export const Content = styled.div`
position: relative;
display: flex;
justify-content: start;
height:80px;
gap: 20px;

width: 100%;
align-items: center;

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

`
export const Trasso = styled.div `
    width: 368px;
    height: 0px;
    border: 1px solid var(--base-button);
`
    
export const Totals = styled.div `
    width: 368px;
    display: flex;
    flex-direction: column;
    gap: 13px;


    .line{
        display: flex;
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
    width: 368px;
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
