import styled from "styled-components"

export const Container = styled.div`
    max-width: 100%;
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

    @media (max-width: 1150px) {
        padding: 2% 1%;
        
    }
    @media (max-width: 1000px) {
        display: grid;
        justify-content: center;
        align-items: center;
        
    }
    @media (max-width: 600px) {
        .imgDelivery{
            width: 100%;
            height: auto;
        }
    }
`