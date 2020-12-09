import React, { createContext, useEffect, useState } from 'react'
// import { graphql, useStaticQuery } from 'gatsby'

const Context = createContext(null)

const ContextProvider = ({ children }) => {
  const [scroll, setScroll] = useState(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const updateScroll = () => {
      setScroll(window.scrollY)
    }
    window.addEventListener('scroll', updateScroll);
    return (() => {
      window.removeEventListener('scroll', updateScroll);
    })

  }, [scroll])

  useEffect(() => {
    const updateWidth = () => {
      setScroll(window.scrollY)
    }
    window.addEventListener('resize', updateWidth);
    return (() => {
      window.removeEventListener('resize', updateWidth);
    })

  }, [width])
  
  return (
    <Context.Provider value={{scroll, width}}>
      {children}
    </Context.Provider>)
}

export { Context, ContextProvider }