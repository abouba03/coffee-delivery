import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    margin-top: 200px;
    padding: 0 160px;
    


`
export const Card = styled.div`
    padding: 0 20px;
    width: 256px;
    position: relative;
    height: 310px;
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    border-radius: 6px 36px;
    background: #f3f2f2;

    .imgCard{
        width: 120px;
        height: 120px;
        position: absolute;
        left: 50%;
        top: -20px;
        transform: translate(-50%,0);
    }
    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 116px 0 20px 0;
    }
    
    .type{
        text-align: center;
        width: 81px;
        margin: 0 auto;
        height: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px 8px; 
        color: #c47f17;
        font-weight: 700;
        font-size: 10px;
        background: #f1e9c9;
        border-radius: 10px; 
    }
    h1{
        margin-bottom: 8px;
        font-size: 20px;
        text-align: center;
    }
    .description{
        font-size: 14px;
        color: #8d8686;
        line-height: 18px;
        text-align: center;
        margin-bottom: 33px;
    }

    .details{
        display: flex;
        justify-content: space-between;

        p{
            span{
                font-size: 24px;
                font-family: "Baloo 2";
                font-weight: 800;
            }
        }

    
        .counter{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4px;
            width: 72px;
            height: 38px;
            background: #e6e5e5;
            border-radius: 6px;
        }
        .achat{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 8px;
        }

        .panier{
            width: 38px;
            height: 38px;
            border-radius: 6px;
            background: #4b2995;
            display: flex;
            justify-content: center;
            
            img{
                align-self: center;
            }
        }
    }
`