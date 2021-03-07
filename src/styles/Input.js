import styled from 'styled-components'

export const InputText = styled.input`
    font-family: Open Sans;
    border-radius: 1rem;
    border: 1px solid #E5E5E5;
    padding: 1.8rem 1.4rem;

    height: ${({ height }) => `${height}`};
`