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
import cloth9 from "./assets/img/clothes/imgcard9.jpeg"
import cloth10 from "./assets/img/clothes/imgcard10.jpeg"
import shoe1 from "./assets/img/shoes/shoe1.avif"
import shoe2 from './assets/img/shoes/shoe2.avif'
// import shoe3 from './assets/img/shoes/shoe3.avif'
import shoe4 from './assets/img/shoes/shoe4.avif'
// import shoe5 from './assets/img/shoes/shoe5.avif'
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
import { Delivery } from './components/delivery'
import { SelectedProduct } from './components/selectedProduct'
import { useEffect, useState } from 'react'
function App() {
  const products = [
    {
      title: "MEN'S Printed T-shirt ", price: '149', img: cloth1, id: '1', thread: true, category: "MEN",
      subCategory: "CLOTHES"
    },
    {
      title: "WOMEN'S Black Top", price: '199', img: cloth2, id: '2', thread: true, category: "WOMEN",
      subCategory: "CLOTHES"
    },
    {
      title: "MEN'S Black T-shirt", price: '239', img: cloth3, id: '3', thread: true, category: "MEN",
      subCategory: "CLOTHES"
    },
    {
      title: "MEN'S White T-shirt", price: '189', img: cloth4, id: '4', thread: true, category: "MEN",
      subCategory: "CLOTHES", bestSeller: true
    },
    {
      title: "MEN'S Printed yellow T-shirt ", price: '179', img: cloth5, id: '5', thread: true, category: "MEN",
      subCategory: "CLOTHES"
    },
    {
      title: "WOMEN'S purple Top", price: '199', img: cloth6, id: '6', thread: true, category: "WOMEN",
      subCategory: "CLOTHES"
    },
    {
      title: "MEN'S blue T-shirt", price: '239', img: cloth7, id: '7', thread: true, bestSeller: true, category: "MEN",
      subCategory: "CLOTHES"
    },
    {
      title: "MEN'S White & green T-shirt", price: '189', img: cloth8, id: '8', thread: true, category: "MEN",
      subCategory: "CLOTHES"
    },
    {
      title: "WOMEN'S purple & white check shirt", price: '239', img: cloth9, id: '9', thread: true, bestSeller: true, category: "WOMEN",
      subCategory: "CLOTHES"
    },
    {
      title: "WOMEN'S Designer Black Dress", price: '189', img: cloth10, id: '10', thread: true, category: "WOMEN",
      subCategory: "CLOTHES"
    },
    {
      title: "WOMEN'S TRAINERS STREET ICON", price: '299', img: shoe1, category: "WOMEN",
      subCategory: "SHOES",id:'11'
    },
    {
      title: "MEN'S COURT VISON LOW NEXT SNEAKERS", price: '399', img: shoe2, id: '12', category: "MEN",
      subCategory: "SHOES"
    },

    {
      title: "WOMEN'S PROMINA WALKING SHOES", price: '199', img: shoe4, id: '13', bestSeller: true, category: "WOMEN",
      subCategory: "SHOES"
    },


    {
      title: "MEN'S COURT VISON LOW NEXT SNEAKERS2", price: '399', img: shoe6, id: '14', category: "MEN",
      subCategory: "SHOES"
    },
    {
      title: "WOMEN'S GO FLYEASE WALKING SHOES2", price: '249', img: shoe7, id: '15', category: "WOMEN",
      subCategory: "SHOES"
    },
    {
      title: "MEN'S PROMINA WALKING SHOES2", price: '199', img: shoe8, id: '16', category: "MEN",
      subCategory: "SHOES"
    },
    {
      title: "MEN'S GO FLYEASE WALKING SHOES2", price: '249', img: shoe9, id: '17', bestSeller: true, category: "MEN",
      subCategory: "SHOES"
    },
    {
      title: "WOMEN'S PROMINA WALKING SHOES2", price: '199', img: shoe10, id: '18', category: "WOMEN",
      subCategory: "SHOES"
    }


  ]
  const [cartItems,setCartItems] = useState([])
  const [cardTotal,setCardTotal]=useState(0)
  const addToCart=(product)=>{
          setCartItems((prev)=>[...prev,product])
          console.log(cartItems)
      }
      const removeFromCart=(id)=>{
        console.log(id,'id')
        setCartItems((prev)=>prev.filter((item)=>item.id!==id))
          console.log(cartItems)
      }
      
  
  return (
    <>
      <productContext.Provider value={{products,cartItems,setCartItems,addToCart,removeFromCart,cardTotal,setCardTotal}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path='/about' element={<About />} ></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/collection' element={<Collection />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/signup' element={<Signup />}></Route>
              <Route path='/delivery' element={<Delivery/>}></Route>
              <Route path='/selectedProduct/:productId'element={<SelectedProduct/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </productContext.Provider>
    </>
  )
}

export default App
