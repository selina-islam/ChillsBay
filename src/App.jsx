import './App.css'
import MyNavber from './Components/MyNavber'
import Footer from './Components/Footer'
import HomePage from './Components/HomePage/Index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DrinkPage from './Components/DrinkPage/DrinkPage'
import Club from './Components/ClubPage/Club'

function App() {

  return (
    <>
      <Router>
        <MyNavber />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/drink" element={<DrinkPage />}></Route>
          <Route path='/club' element={<Club/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App
