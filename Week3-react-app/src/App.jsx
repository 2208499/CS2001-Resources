import './App.css'
import Sidebar from './components/Sidebar.jsx'
import Registration from './components/Registration.jsx'

function App() {
  return (
    <>
      <header></header>
      <div className="container">
        <Sidebar/>
        <main className="maincontent">
          <Registration/>
        </main>
      </div>


      {/* <nav>
        <ul className="navlist">
          <li><a href="/Home">Home</a></li>
          <li><a href="/Register">Register</a></li>
          <li><a href="/Login">Login</a></li>
          <li><a href="/Help">Help</a></li>
        </ul>
      </nav> */}
    </>
  )
}

export default App