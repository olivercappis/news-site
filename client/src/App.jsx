import NavTabs from './components/navbar.jsx'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <>
      <NavTabs />
      <Outlet />
    </>
  )
}

export default App

