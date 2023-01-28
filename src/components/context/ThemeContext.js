import React from 'react'

const ThemeContext = React.createContext({
  isTheme: true,
  changeTheme: () => {},
})

export default ThemeContext
