import styled from "styled-components";

export const Container = styled.div`
width: 100%;
animation: slideIn 1.5s ease-in-out;

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
        animation: bounce 1s ease-in-out 2s 1;
    }
    .titre{
        display: flex;
        gap: 10px;
        align-items: center;
        animation: bounce 1s ease-in-out 1.6s 1;
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
            animation: bounce 1s ease-in-out 2s 1;

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
        animation-delay: 2.4s;
    }
    .input-rua{
        width: 90%;
        height: 42px;
        animation-delay: 2.8s;
    }
    .input-numero{
        width: 60%;
        height: 42px;
        animation-delay: 3.2s;
    }
    .input-bairro{
        width: 80%;
        height: 42px;
        animation-delay: 3.6s;
    }
    .input-cidade{
        width: 60%;
        height: 42px;
        animation-delay: 4s;
    }
    .input-uf{
        width: 30%;
        height: 42px;
        animation-delay: 4.4s;
    }

    @media (max-width: 900px) {
        .input-cep{
            width: 100%;
        }
        .input-rua{
            width: 100%;
        }
        .input-numero{
            width: 100%;
        }
        .input-bairro{
            width: 100%;
        }
        .input-cidade{
            width: 100%;
        }
        .input-uf{
            width: 100%;
        }
        
        padding: 4px;
    }
        


`
