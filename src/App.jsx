import Header from './components/header'
import './App.css'
import Shoes from './components/shoes'
import Clothes from './components/clothes'
import Footer from './components/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import productContext from './components/context'
import Layout from './components/layout'
import Home from './components/home'
import About from './components/about'
import cloth1 from "./assets/img/clothes/imgcard1.jpeg"
import cloth2 from "./assets/img/clothes/imgcard2.jpeg"
import cloth3 from "./assets/img/clothes/imgcard3.jpeg"
import cloth4 from "./assets/img/clothes/imgcard4.jpeg"
import cloth5 from "./assets/img/clothes/imgcard5.jpeg"
import cloth6 from "./assets/img/clothes/imgcard6.jpeg"
import cloth7 from "./assets/img/clothes/imgcard7.jpeg"
import cloth8 from "./assets/img/clothes/imgcard8.jpeg"
import shoe1 from "./assets/img/shoes/shoe1.avif"
import shoe2 from './assets/img/shoes/shoe2.avif'
import shoe3 from './assets/img/shoes/shoe3.avif'
import shoe4 from './assets/img/shoes/shoe4.avif'
import shoe5 from './assets/img/shoes/shoe5.avif'
import shoe6 from './assets/img/shoes/shoe6.avif'
import shoe7 from './assets/img/shoes/shoe7.avif'
import shoe8 from './assets/img/shoes/shoe8.avif'
import shoe9 from './assets/img/shoes/shoe9.avif'
import shoe10 from './assets/img/shoes/shoe10.avif'
import { BestSeller } from './components/bestseller'
import { Contact } from './components/contact'
import { Collection } from './components/collection'
import { Login } from './components/login'
import { Signup } from './components/signup'
import { Cart } from './components/cart'
function App() {
  const products = [
    { title: "MEN'S Printed T-shirt ", price: '$149', img: cloth1, id: '',thread:true },
    { title: "WOMEN'S Black Top", price: '$199', img: cloth2, id: '' ,thread:true},
    { title: "MEN'S Black T-shirt", price: '$239', img: cloth3, id: '' ,thread:true},
    { title: "MEN'S White T-shirt", price: '$189', img: cloth4, id: '' ,thread:true,bestSeller:true},
    { title: "MEN'S Printed yellow T-shirt ", price: '$179', img: cloth5, id: '',thread:true },
    { title: "WOMEN'S purple Top", price: '$199', img: cloth6, id: '' ,thread:true},
    { title: "MEN'S blue T-shirt", price: '$239', img: cloth7, id: '' ,thread:true,bestSeller:true},
    { title: "MEN'S White & green T-shirt", price: '$189', img: cloth8, id: '' ,thread:true},

    { title: "MEN'S TRAINERS STREET ICON", price: '$299', img: shoe1, },
    { title: "MEN'S COURT VISON LOW NEXT SNEAKERS", price: '$$399', img: shoe2, id: '' },
    { title: "MEN'S GO FLYEASE WALKING SHOES", price: '$249', img: shoe3, id: '' },
    { title: "MEN'S PROMINA WALKING SHOES", price: '$199', img: shoe4, id: '' ,bestSeller:true},

    { title: "MEN'S TRAINERS STREET ICON2", price: '$299', img: shoe5},
    { title: "MEN'S COURT VISON LOW NEXT SNEAKERS2", price: '$399', img: shoe6, id: '' },
    { title: "MEN'S GO FLYEASE WALKING SHOES2", price: '$249', img: shoe7, id: '' },
    { title: "MEN'S PROMINA WALKING SHOES2", price: '$199', img: shoe8, id: '' },
    { title: "MEN'S GO FLYEASE WALKING SHOES2", price: '$249', img: shoe9, id: '' ,bestSeller:true},
    { title: "MEN'S PROMINA WALKING SHOES2", price: '$199', img: shoe10, id: '' }

  ]

  return (
    <>
    <productContext.Provider value ={products}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/about' element={<About />} ></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/collection' element={<Collection/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
           <Route path='/signup' element={<Signup/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </productContext.Provider>
    </>
  )
}

export default App
