import './App.css'
import { Navigate, Route, Routes } from 'react-router'
import Header from './components/common/Header'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import MenuPage from './components/pages/MenuPage'
import OrderPage from './components/pages/OrderPage'
import ContactPage from './components/pages/ContactPage'

function App() {


return(
    <div>

    <Header />
    <Routes>
        <Route path="/" element={<HomePage/>}/>

        <Route path="*" element={<Navigate to="/"/>}/>

        <Route path="/about" element={<AboutPage/>}/>

        <Route path="/menu" element={<MenuPage/>}/>

        <Route path="/order" element={<OrderPage/>}/>

        <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
    </div>
)

}

export default App
