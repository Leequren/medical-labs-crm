import './App.css'
import { Navigation } from './components/navigation/Navigation'
import { MainPage } from './pages/MainPage/MainPage'

function App() {

  return (
    <div style={{ display: "flex", gap: "50px", marginLeft: "50px", paddingTop: "99px"}}>
      <Navigation />
      <MainPage />
    </div>
  )
}

export default App
