import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    min-height: 207px;
    max-width: 640px;
    padding: 30px;
    border-radius: 6px;
    background: var(--base-card);
    margin-top: 12px;
    animation: slideIn 1.5s ease-in-out;
    h2{
        animation: bounce 1s ease-in-out 4.8s 1;
    }
    
    .desc{
        padding-left: 32px;
        color: var(--base-subtitle);
        animation: bounce 1s ease-in-out 5.2s 1;
    }
    .titre, a{
        display: flex;
        gap: 10px;
        align-items: center;
        
    } 
    .tipos-pagamento{
        display: flex;
        gap: 5px;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        margin: 32px 0 ;
        animation: bounce 1s ease-in-out 5.6s 1;
        
    }
    .btn{
        display: flex;
        justify-content: start;
        padding: 14px;
        align-items: center;
        max-width: 178px;
        height: 51px;
        gap: 11px;
        background: var(--base-button);
        border-radius: 6px;
        cursor: pointer;
        animation: shake .1s ease-in-out 6s 7;
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