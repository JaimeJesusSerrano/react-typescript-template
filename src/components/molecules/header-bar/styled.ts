import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: black;
  color: rgb(120, 132, 140);
  padding: 16px;

  @media ${props => props.theme.devices.laptopMax} {
    color: rgb(50, 132, 140);
  }
`
