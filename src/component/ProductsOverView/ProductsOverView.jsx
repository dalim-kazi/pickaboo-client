 import { Button, Dialog, DialogBody, DialogHeader, IconButton,Typography } from "@material-tailwind/react";
import {  useContext, useState } from "react";
import { FaRegHeart } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import DetailTab from "./DetailsTab/DetailTab";
 
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
 
import axios from "axios";
 

 
const ProductsOverView = ({products}) => {
  
  const {user}=useContext(AuthContext)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
  const { tittle, brand, color, Size, image, details, price, price2, _id } = products
  const [activeImage, setActiveImage] = useState(image[0])
  const [productSize, setProductSize] = useState()
  const navigate = useNavigate()
 
    const increment = () => {
       const textField = document.getElementById("value-field")
       const subtotalField = document.getElementById("subtotal")
       const subtotalTextValue = subtotalField.innerText 
       const subtotalValue =parseFloat(subtotalTextValue)
        const textValue = textField.innerText 
        const NumberValue = parseFloat(textValue)
        const newValue = NumberValue + 1 
        const totalPrice = subtotalValue * newValue
       subtotalField.innerText=totalPrice
        textField.innerText=newValue
    }
    const decrement = () => {
      const textField = document.getElementById("value-field")
      const subtotalField = document.getElementById("subtotal")
       const subtotalTextValue = subtotalField.innerText 
       const subtotalValue =parseFloat(subtotalTextValue)
        const textValue = textField.innerText 
        const NumberValue = parseFloat(textValue)
      if (NumberValue > 1) {
          const totalPrice = subtotalValue / NumberValue
          const newValue = NumberValue - 1
          subtotalField.innerText =totalPrice
            textField.innerText = newValue
            return
        }
        
  }
  const handleImageMouseMove = (e) => {
    const container = document.getElementById("container");
    const img = document.getElementById("activeImage");

    const x = (e.clientX - container.getBoundingClientRect().left);
    const y = (e.clientY - container.getBoundingClientRect().top);

    const transformValue = `${x}px ${y}px`;
    img.style.transformOrigin = transformValue;
    img.style.transform='scale(3)'
  };

  const handleImageMouseLeave = () => {
    const img = document.getElementById("activeImage");
    img.style.transformOrigin = "center";
    img.style.transform='scale(1)'
  };

  const productsSize = (e) => {
      setProductSize(e)
   }

  const handleBuyProducts = () => {
    const subtotalField = document.getElementById("subtotal")
    const subtotalTextValue = subtotalField.innerText 
    const textField = document.getElementById("value-field") 
    const quantityText = textField.innerText;
    if (user) {
      axios.delete(`http://localhost:5000/viewProducts?email=${user?.email}`)
    }
    const viewProducts  = {
      productsId:_id,
      email:user?.email,
      buySystem:"buy", 
      tittle,
      price,
      subtotal: parseFloat(subtotalTextValue),
      image: image[0],
      color,
      brand,
      productSize,
      quantity:parseFloat(quantityText)
    }
    if (user) {
      
      if (productSize) {
        axios.post('http://localhost:5000/viewProducts', viewProducts)
      .then(data => {
        if (data.data.insertedId) {
          console.log(data)
        } 
        
      })
      navigate('/productsOverViewDetails')
     }
  
      else {
        Swal.fire({
          icon:"error",
         text:"please select your products size"
       })
      }
  }
    else {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'please, login'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      })
    }
    
  }

  const handleAddToCartProducts = () => {
      const viewProducts  = {
        productsId:_id,
        email:user?.email,
        cartSystem:"cart", 
        tittle,
        price,
        image: image[0],
        color,
        brand,
        Size,
    }
     
    if (user) {
      axios.post('http://localhost:5000/cartProducts', viewProducts)
      .then(data => {
        if (data.data.insertedId) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        } 
        
      })
    }
    else {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'please, login'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      })
    }
  }
  const handleAddToFavoriteProducts = () => {
    const favoriteProducts  = {
      productsId:_id,
      email:user?.email,
      favoriteSystem:"favorite", 
      tittle,
      price,
      image: image,
      color,
      brand,
      Size
    }
   
    if (user) {
      axios.post('http://localhost:5000/favoriteProducts', favoriteProducts)
        .then(data => {
          if (data.data.insertedId) {
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
          } 
    })
    }
    else {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'please, login'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      })
    }
  }

      return (
          <>
              <div className="grid md:grid-cols-2 w-5/6 gap-10 mb-10 mx-auto items-start">
                  
              <div className="flex flex-col w-full mt-10 mx-auto">
                     <div className="w-4/5 h-1/2 mx-auto truncate cursor-pointer" id="container" onMouseMove={handleImageMouseMove} onMouseLeave={handleImageMouseLeave}> <img  id="activeImage" src={activeImage} className="aspect-square object-cover origin-center h-full" alt="" /></div>
                      
            <div className="flex flex-row md:justify-between gap-3 w-80 md:w-72 lg:80 mt-20 mx-auto">
                          <img src={image[0]} alt="" className="w-14 h-14 cursor-pointer rounded-md" onClick={() => setActiveImage(image[0])} />
                          {
                              image[1]?<img src={image[1]} alt="" className="w-14 h-14 cursor-pointer rounded-md" onClick={()=>setActiveImage(image[1])}/>:<></>
                          }
                          {
                              image[2]?<img src={image[2]} alt="" className="w-14 h-14 cursor-pointer rounded-md" onClick={()=>setActiveImage(image[2])}/>:<></>
                          }
                          {
                              image[3]?<img src={image[3]} alt="" className="w-14 h-14 cursor-pointer rounded-md" onClick={()=>setActiveImage(image[3])}/>:<></>
                          }
                          
            </div>
                  </div>
                  <div className="mt-10">
                      <p className="text-2xl">{tittle}</p> 
                      <p className="text-md mt-5">Brand : {brand}</p>
                   <p className="text-2xl text-orange-600 mt-2 mb-2"> {price2?<strike>TK. {price2}</strike>:<></>} TK. {price}</p> 
                      <p>{details}</p>
                      <div>
                          <div className="flex justify-between">
                          <p className="mt-5">Size*</p>
                      <Button variant="text" onClick={handleOpen}>SIZE CHART</Button>
                          </div>
                      <>
    <Dialog size="xs"
      escapeKey="true"
      referencePress= "true"
      className="scroll-auto"
     open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div>
            <Typography variant="h5" color="blue-gray">
              Size Chart
            </Typography>
          </div>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody className="overflow-y-scroll !px-5" style={{ maxHeight: '400px' }}>
          <img src="https://www.batabd.com/cdn/shop/files/5d6ef28c-da51-4990-9fce-212107fbe12e_1024x1024.jpg?v=1634115062" alt="" />
          
        </DialogBody>
      </Dialog>
    </>
                      </div>

                      <div className="mt-5">
                      <IconButton onClick={()=>productsSize(Size[0])} variant="outlined" color="red" size="lg" className="rounded-full mr-5 hover:bg-black hover:text-white text-black w-20">
                       {Size[0]}
                          </IconButton>
                          {
                          Size[1] ? <IconButton onClick={()=>productsSize(Size[1])} variant="outlined" color="red" size="lg" className="rounded-full mr-5 hover:bg-black hover:text-white text-black w-20">
                          {Size[1]}
                             </IconButton>:<></>
                          }
                          {
                          Size[2] ? <IconButton onClick={()=>productsSize(Size[2])} variant="outlined" color="red" size="lg" className="rounded-full mr-5 hover:bg-black hover:text-white text-black w-20">
                          {Size[2]}
                             </IconButton>:<></>
                          }
                          {
                          Size[3] ? <IconButton onClick={()=>productsSize(Size[3])} variant="outlined" color="red" size="lg" className="rounded-full mr-5 hover:bg-black hover:text-white text-black w-20">
                          {Size[3]}
                             </IconButton>:<></>
                          }
                          {
                          Size[4] ? <IconButton onClick={()=>productsSize(Size[4])} variant="outlined" color="red" size="lg" className="rounded-full mr-5 hover:bg-black hover:text-white text-black w-20">
                          {Size[4]}
                             </IconButton>:<></>
                          }
                          {
                          Size[5] ? <IconButton onClick={()=>productsSize(Size[5])} variant="outlined" color="red" size="lg" className="rounded-full mr-5 hover:bg-black hover:text-white text-black w-20">
                          {Size[5]}
                             </IconButton>:<></>
                          }
                      </div>
                      <div className="mt-5"> 
                          <p className="mb-5">Color*</p>
                          {
                              color ==='blue'?<IconButton variant="outlined" color="blue" size="lg" className="rounded-full mr-5 bg-blue-600">
                                 .
                                 </IconButton>:<></>
                          }
                          {
                              color ==='black'?<IconButton variant="outlined" color="blue" size="lg" className="rounded-full mr-5 bg-black">
                                 .
                                 </IconButton>:<></>
                          }
                           {
                              color ==='white'?<IconButton variant="outlined" color="blue" size="lg" className="rounded-full mr-5 bg-white">
                                 .
                                 </IconButton>:<></>
                          }
                          {
                              color ==='red'?<IconButton variant="outlined" color="red" size="lg" className="rounded-full mr-5 bg-red-600">
                                 .
                                 </IconButton>:<></>
                          }
                          {
                              color ==='grey'?<IconButton variant="outlined" color="gray" size="lg" className="rounded-full mr-5 bg-gray-600">
                                 .
                                 </IconButton>:<></>
                          }
                          {
                              color ==='brown'?<IconButton variant="outlined" color="brown" size="lg" className="rounded-full mr-5 bg-brown-600">
                                 .
                                 </IconButton>:<></>
                          }
                          {
                              color ==='green'?<IconButton variant="outlined" color="green" size="lg" className="rounded-full mr-5 bg-green-600">
                                 .
                                 </IconButton>:<></>
                          }
                          {
                              color ==='pink'?<IconButton variant="outlined" color="pink" size="lg" className="rounded-full mr-5 bg-pink-600">
                                 .
                                 </IconButton>:<></>
                          }
                      </div>
                      <div className="mt-5">
                          <p>Quantity</p>
                          <div className="flex mt-5">
                          <IconButton onClick={increment} variant="text" size="md" className="border-2 "><span className="text-xl">+</span></IconButton>
                          <p id="value-field" className="border-2 w-10 text-center px-2 py-1 rounded-md">1</p>
                          <IconButton onClick={decrement} variant="text" size="md" className="border-2"><span className="text-2xl">-</span></IconButton>
                          </div>
                      </div>
                      <p className="mt-5">Subtotal : TK. <span id="subtotal">{price}</span></p>
                      <div className="mt-5 mb-5">
                          <Button onClick={handleAddToCartProducts} className="rounded-none w-7/12 hover:bg-red-600">ADD TO CART</Button>
                          <IconButton onClick={handleAddToFavoriteProducts} variant="outlined" size="md" className="rounded-md ml-3  hover:bg-black hover:text-white"><FaRegHeart className="text-xl"></FaRegHeart></IconButton>
                      </div>
                       <Button onClick={handleBuyProducts} variant="outlined" className="rounded-none w-4/6 hover:bg-black hover:text-white">BUY NOW</Button>
                  </div>
          </div>
          <div className="mt-20 border-t-2">
            <div className="mt-10 mb-20"><DetailTab products={products}></DetailTab></div>
          </div>  
          </>
  );
  
};

export default ProductsOverView;