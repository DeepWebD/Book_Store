import { Outlet } from "react-router-dom"
import Header from "./component/Header"

function App() {


  return (
       <>
      <div id="sidebar">
        <Header />
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

export default App
