import styled from 'styled-components';

const StyledRecord = styled.div`
    background: var(--Beige);
    height: 100vh;

    h1{
        text-align: center;
        padding-top: 2rem;
        color: var(--Maroon);
    }

    .links{
        display: flex;
        justify-content: center;

        a{
            text-decoration: none;
            margin: 0 0.5rem;
            color: white;
            border-radius: 4px;
            padding: 0.75rem 1.25rem;
            

            &:first-of-type{
                background: var(--Blue);
            }

            &:last-child{
                background: var(--Orange);
            }

        }
    }


`


export default StyledRecord; 