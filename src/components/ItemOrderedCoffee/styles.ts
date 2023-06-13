import styled from "styled-components";

export const Container = styled.div`
width: 100%;
animation: slideIn 1.5s ease-in-out;
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
    