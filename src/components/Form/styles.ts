import styled from "styled-components";

export const Container = styled.div`
width: 100%;
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
