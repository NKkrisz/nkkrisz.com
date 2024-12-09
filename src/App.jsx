import NavBar from "./components/NavBar"

function App() {
  return (
    <>
    <NavBar/>
    <div className="page" style={{marginTop:"0.5rem", padding:"0.5rem", color:"white"}}>
      <h2>Work In Progress</h2>
      <p>In The Meantime, Please Go To These Places:</p>
      <a href="https://links.nkkrisz.com">My Socials / Contact Me</a>
      <a href="https://kofi.nkkrisz.com">Donate To Me On Kofi</a>
    </div>
    </>
  )
}

export default App
