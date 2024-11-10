import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footers from './Components/Footers'
import SignUpForm from './Pages/Auth/SignUpForm'
import SignInForm from './Pages/Auth/SignInForm'
import ForgetPasswordForm from './Pages/Auth/ForgetPasswordForm'
import ResetPasswordForm from './Pages/Auth/ResetPasswordForm'
import Menu from './Components/Menu'
import Mobile from './Components/Mobile'
import Loptop from './Components/Loptop'
import Tablets from './Components/Tablets'
import Smartwatch from './Components/Smartwatch'
import Gamingconsole from './Components/Gamingconsole'
import Headphones from './Components/Headphones.JSX'
import Tvs from './Components/Tvs'
import Camera from './Components/Camera'
import Smarthome from './Components/Smarthome'





function App() {

  return (
  
    <>
    <BrowserRouter>

    <Header/>
    <br />
    <Menu/>
    <br />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUpForm/>}/>
      <Route path='/signin' element={<SignInForm/>}/>
      <Route path='/forgetpassword' element={<ForgetPasswordForm/>}/>
      <Route path='/resetpassword' element={<ResetPasswordForm/>}/>
      <Route path='/mobile' element={<Mobile/>}/>
      <Route path='/laptop' element={<Loptop/>}/>
      <Route path='/tablet' element={<Tablets/>}/>
      <Route path='/swatch' element={<Smartwatch/>}/>
      <Route path='/gaming' element={<Gamingconsole/>}/>
      <Route path='/headphone' element={<Headphones/>}/>
      <Route path='/tvs' element={<Tvs/>}/>
      <Route path='/cameras' element={<Camera/>}/>
      <Route path='/homedivice' element={<Smarthome/>}/>
     
    </Routes>
    
    <Footers/>
    
    </BrowserRouter>
    </>
  )
}

export default App
