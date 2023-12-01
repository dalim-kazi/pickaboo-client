import { FaAngleRight } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";
import { Link } from "react-router-dom";
import UseAddToCart from "../../Hook/UseAddToCart/UseAddToCart";
import { Button, Card, IconButton, Spinner,} from "@material-tailwind/react";
import axios from "axios";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
 

const AddToCartView = () => {
    const {user}=useContext(AuthContext)
    const [cartProducts, refetch, isLoading, isError] = UseAddToCart()
     const [productSize,setProductSize]=useState('')
    const [itemQuantities, setItemQuantities] = useState({});
     
    const increment = (itemId) => {
        setItemQuantities((prevQuantities) => ({
            ...prevQuantities,
            [itemId]: (prevQuantities[itemId] || 1) + 1,
        }));
        
    }
    
    const decrement = (itemId) => {
        setItemQuantities((prevQuantities) => {
            const currentQuantity = prevQuantities[itemId] || 1;
            if (currentQuantity > 0) {
                return {
                    ...prevQuantities,
                    [itemId]: currentQuantity - 1,
                };
            }
            return prevQuantities;
        });
    }
    
    const calculateItemTotal = (itemId, price) => {
        const quantity = itemQuantities[itemId] || 1;
        return quantity * price;
    }

    const calculateSubtotal = () => {
        let subtotal = 0;
        cartProducts?.forEach(item => {
            const total = calculateItemTotal(item._id, item.price);
            subtotal += total;
        });
        return subtotal;
    }
    const handleDelete = (id) => {
        axios.delete(`https://bata-server.vercel.app/cartProducts/${id}`)
        .then(data => {
            if (data.data.deletedCount > 0) {
                refetch()
                Swal.fire({
                  position: 'top-center',
                  icon: 'success',
                  title: 'Item removed from the cart',
                  showConfirmButton: false,
                  timer: 1500
                })
            }
    })
     }

     
    const handleSize = (e) => {
         setProductSize(e)
    }
    const handleUpdate = (id,price) => {
        const quantity = itemQuantities[id] || 1;
        const totalPrice = price * quantity 
        
        const productsInfo = {
            
            id,
            email:user.email,
            quantity,
            subtotal:totalPrice,
            productSize:productSize
        }
        
       if (productSize) {
        axios.put('https://bata-server.vercel.app/cartProducts', productsInfo)
        .then((data => {
            if (data.data.matchedCount > 0) {
                refetch()
                
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Item update from the cart',
                    showConfirmButton: false,
                    timer: 2500
                  })
        }
    }))
        }
       else {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'please add your products size',
            showConfirmButton: false,
            timer: 2500
          })
        }
             
            
     }
    
     if (isLoading) {
        return <Spinner className="h-16 w-16 text-blue-600 mx-auto mt-10 mb-52" />;
      }
    
      if (isError) {
        return <div>Error: {isError.message}</div>;
      }
    return (
        <>
         {
            cartProducts?.length>0? <div className="mt-10 mb-20 lg:w-5/6 md:mx-auto">
            <div>
                <p className="flex items-center text-orange-600 mb-5"><HiHome className="text-2xl mr-1"></HiHome><Link to={'/'} className="text-lg">Home</Link><FaAngleRight></FaAngleRight>Shopping Cart</p>
                <p className="text-lg mb-2">YOUR CART</p>
            </div>
            <div className="grid laptop:grid-cols-12 gap-5">
                <div className="lg:col-span-8 border-[20px]">
                     
                {
                    cartProducts?.map(item => <div key={item._id} className="tablet:flex items-end justify-between gap-3 border-8 p-3">
                        <div className="mobile:flex items-center gap-6">
                        <div>
                            <img className="w-48 h-48" src={item.image} alt="" />
                        </div>
                        <div>
                            <p>{item.tittle}</p>
                                <p><span>{item.quantity}</span>/<span>{item.color}</span>/<span>{item.brand}</span></p>
                                <p>{calculateItemTotal(item._id, item?.price)}</p>
                                <div className="mt-2 mb-2">
                                    <p className="mb-2">Size :</p>
                                    {
                                        item?.Size.map((item,index)=><IconButton key={index} onClick={()=>handleSize(item)} variant="outlined" color="red" size="sm" className="rounded-full mr-2 hover:bg-black hover:text-white text-black w-20 text-[9px]">
                                         {item}
                                           </IconButton>)
                                    }
                                </div>
                            <p>quantity:</p>
                            <div className="flex mt-2">
                          <IconButton onClick={()=>increment(item._id ,item.price)} variant="text" size="md" className="border-2 rounded-none"><span className="text-xl">+</span></IconButton>
                          <p id="value-field" className="border-2 w-14 text-center px-2 py-1">{itemQuantities[item._id] || 1}</p>
                                    <IconButton onClick={() => decrement(item._id)} variant="text" size="md" className="border-2 rounded-none"><span className="text-2xl">-</span></IconButton>
                                    <Button size="sm" onClick={()=>handleUpdate(item._id,item.price)} className="rounded-none hover:bg-red-500 ml-5 tablet:ml-20"><span className="flex mx-auto">update cart</span></Button>
                        </div> 
                        </div>
                        </div>
                        <div>
                            <Button onClick={() => handleDelete(item._id)} variant="outlined" className="border-gray-400 text-gray-700 hover:border-red-600 hover:text-red-600 rounded-none mt-3">Remove</Button>
                        </div>
                    </div>)
                }
                </div>
                <div className="lg:col-span-4 w-4/6 lg:w-full mx-auto bg-gray-200 max-h-[12rem] min-h-[220px] border-r-[1rem] border-l-[1rem]">
                    <p className="text-center text-md mt-3 mb-1">SUBTOTAL</p>
                    <div className="bg-white text-center mt-5">
                    <p id="subtotal-price" className="lg:mb-5 pt-5 pb-8 lg:pb-1 text-lg">TK.{calculateSubtotal()}</p>
                   <Link to={"/addToCartDetail"}> <Button  className="rounded-none hover:bg-red-600 lg:mb-10 mb-5"><span className="flex mx-auto">CHECK OUT NOW</span></Button></Link>
                    </div>
            </div>
            </div>
                </div> : <>
                <Card className="mt-10 mb-20 w-full h-full shadow-none mx-auto p-10">
                            <p className="text-2xl font-bold mb-1">My Cart Products (0)</p>  
                     <hr />       
                <div className="p-5 md:p-20 mx-auto">
                 <img src="https://www.pickaboo.com/_next/static/images/empry-cart-17e583c2859b7c0951bb12abb2e6808f.svg" alt="" />  
                <p className="text-orange-600 text-2xl mt-10 text-center mb-1">Your Cart products is empty</p> 
                <p className="text-center">Looks like you haven’t added anything to your cart yet</p>    
                </div>        
            </Card>    
                    </>    
        }
            
        </>
    );
 };
 
 export default AddToCartView;