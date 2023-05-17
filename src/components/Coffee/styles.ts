import styled from "styled-components"

export const Container = styled.section`
    margin-bottom: 20px ;

    .icon:hover {
        animation-name: scale;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        cursor: pointer;
    }   
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 64px;
    width: 100%;
    gap: 22px;
    
    li{
        list-style: none;
    }


`
export const Card = styled.div`
    padding: 0 20px;
    width: 256px;
    position: relative;
    height: 310px;
    display: flex;
    flex-direction: column;
    border-radius: 6px 36px;
    background: var(--base-card);

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
        color: var(--yellow-dark);
        font-weight: bold;
        font-size: 10px;
        background: var(--yellow-dark);
        border-radius: 10px; 
    }
    h1{
        margin-bottom: 8px;
        font-size: 20px;
        text-align: center;
    }
    .description{
        font-size: 14px;
        color: var(--base-label);
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
            background: var(--base-button);
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
            background: var(--purple-dark);
            display: flex;
            justify-content: center;
            
            img{
                align-self: center;
            }
        }
    }
`