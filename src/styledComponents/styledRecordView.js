import styled from 'styled-components';


const StyledRecordingView = styled.div`
    background: var(--White);
    height: 400px;
    width: 400px;
    display: block;
    margin: 40px auto;

    .record-video{
        height: 85%;
        margin: 0.25rem 0.25rem 0 0.25rem;
    }

    .record-controls{
        height: 15%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background: var(--Maroon);


        button{
            border-radius: 4px;
            height: 2rem;
            width: 4rem;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;

            
        }
    }

    


`


export default StyledRecordingView;