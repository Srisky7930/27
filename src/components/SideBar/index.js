import {Link} from 'react-router-dom'

import {
  AiOutlineHome,
  AiFillHome,
  AiFillFire,
  AiOutlineFire,
} from 'react-icons/ai'

import ThemeContext from '../context/ThemeContext'

import {HeaderContainer, LinkCard, Home} from './styledComponents'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isTheme, changeTheme} = value
      console.log(isTheme)
      return (
        <HeaderContainer isTheme={isTheme}>
          <Link to="/">
            <LinkCard>
              {isTheme ? <AiFillHome /> : <AiOutlineHome />}
              <Home> Home </Home>
            </LinkCard>
          </Link>
          <Link to="/trending">
            <LinkCard>
              {isTheme ? <AiFillFire /> : <AiOutlineFire />}
              <Home> Trending </Home>
            </LinkCard>
          </Link>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
