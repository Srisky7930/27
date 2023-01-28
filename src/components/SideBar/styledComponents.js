import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${props => (props.isTheme ? '#f9f9f9' : '#181818')};
  width: 200px;
`

export const LinkCard = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;
`

export const Home = styled.p`
  margin-left: 10px;
`
