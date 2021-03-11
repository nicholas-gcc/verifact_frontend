import styled from 'styled-components'

export const FormButton = styled.button`
    background: none;
    border-radius: 1rem;
    border-style: none;
    height: 3.9rem;

    font-family: SF Pro Text;
    font-size: 1.4rem;

    font-weight: 700;
    line-height: 1.7rem;
    letter-spacing: 0;
    padding: 1rem 1.5rem;

    background: ${({ background }) => background ? `var(--${background})` : `var(--Primary)`};
`

export const VoteButton = styled.button`
    border-radius: .5rem;
    padding: 0.3rem 0.9rem;
    border-style: none;
    color: white;
    font-size: 1.4rem;

    background: ${({ background }) => ` var(--${background})`};
`
