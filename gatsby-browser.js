const React = require('react')
const { ContextProvider } = require('./src/components/context')

// Shortcut to global styles
const style = document.documentElement.style

// Keep track of various heights
const sizeListener = () => {
  const ratio = window.innerWidth / window.innerHeight;
  if (ratio > 1.5)
    style.setProperty('--window-height', window.innerWidth / 1.5 + 'px');
  else
    style.setProperty('--window-height', window.innerHeight + 'px')
}
sizeListener()
window.addEventListener('resize', sizeListener)

exports.wrapRootElement = ({ element }) => <ContextProvider>{element}</ContextProvider>