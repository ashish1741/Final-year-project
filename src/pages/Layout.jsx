import React from 'react'
import Header from '../components/Header'

function Layout() {
  const [activecomponent, setactivecomponent] = useState(false)
  return (
    <div>
      <Header />
      {

       activecomponent && <copurse  />
      }
      <Course />
    </div>
  )
}

export default Layout