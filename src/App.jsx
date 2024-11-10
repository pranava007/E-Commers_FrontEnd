import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footers from './Components/Footers'
import SignUpForm from './Pages/Auth/SignUpForm'
import SignInForm from './Pages/Auth/SignInForm'
import ForgetPasswordForm from './Pages/Auth/ForgetPasswordForm'
import ResetPasswordForm from './Pages/Auth/ResetPasswordForm'




function App() {

  return (
  
    <>
    <BrowserRouter>

    <Header/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUpForm/>}/>
      <Route path='/signin' element={<SignInForm/>}/>
      <Route path='/forgetpassword' element={<ForgetPasswordForm/>}/>
      <Route path='/resetpassword' element={<ResetPasswordForm/>}/>
     
    </Routes>
    
    <Footers/>
    
    </BrowserRouter>
    </>
  )
}

export default App
