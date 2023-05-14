import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    padding: 0 160px;
    display: flex;
    margin-bottom: 20px;
    gap: 5%;
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
    @media (max-width: 900px) {
        margin-top: 20px;
        width: 80%;
       
        
    }
`
export const Right = styled.div`
    width: 45%;
  
    @media (max-width: 900px) {
        margin-top: 20px;
        width: 80%;
       
        
    }
`