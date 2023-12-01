import { Button, Checkbox, Spinner } from "@material-tailwind/react";
import UseBookingInformation from "../../Hook/UseBookingInformation/UseBookingInformation";
import { useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import DateAndTime from "../../component/DateAndTime/DateAndTime";
  
const BookingDetails = ({products,email,isLoading,isError}) => {
    const [displayDate] = DateAndTime()
    const [loading,setLoading]=useState(false)
    const [bookingInformation] = UseBookingInformation()
    const [bookingMethod, setBookingMethod] = useState()
    
    const totalPrice = products?.reduce((accumulator, currentValue) => accumulator + currentValue.subtotal, 0)
    const handleUpdate = (e) => {
        setLoading(true)
        e.preventDefault()
        const currency =e.target.currency.value
        if (bookingMethod && currency) {
            const bookings = {
                email:email,
                currency: currency,
                displayDate:displayDate,
                bookingMethod:bookingMethod,
                products: products,
                totalPrice: totalPrice,
                bookingInformation:bookingInformation
            }
            console.log(bookings)
            axios.post('https://bata-server.vercel.app/bookings', bookings)
                .then(data => {
                    setLoading(false)
                    window.location.replace(data.data.url)
               console.log(data) 
            })
        }
    }
    if (isLoading) {
        <Spinner className="h-16 w-16 text-blue-600 mx-auto mt-10 mb-52" />
    }
    if (isError) {
        if (isError) {
            return <div> {isError.message}</div>;
          }
    }
    return (
        <div className="lg:flex lg:flex-row-reverse w-full  lg:w-5/6 px-2 md:px-10 lg:px-0 gap-10 lg:mx-auto">
        <div className="lg:w-1/2 text-center mb-32">
            <div className="mt-10">
                <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-01%2F21b894f9-5c0d-4513-be40-f813b222deb8%2Fgm_696973d1_5abe_4e2a_824a_54906e71068a_10_returnsomething_bought_online.jpg?rect=83%2C0%2C1854%2C1043&auto=format%2Ccompress&fmt=webp&format=webp&w=900&dpr=1.3" alt="" /> 
            </div> 
             
            {
               products?.map(item=><div key={item._id}>
                    <div className="flex justify-between items-center mt-5">
                <div className="flex items-center text-start gap-3">
                    <div className="w-28 h-28 border-2 rounded-lg bg-blue-gray-400 relative">
                        <img className="w-full h-full" src={item?.image} alt="" />
                        <p className="absolute -top-2 -right-2 text-white w-6 h-6 rounded-full bg-gray-600"><span className="pl-2">{item?.quantity}</span></p>
                    </div>
                            
                    <div className="w-40 md:w-48">
                        <p>{item?.tittle?.slice(0,40)}...</p> 
                        <p> <span>{item?.size}</span>/<span>{item?.color}</span>/<span>{item?.brand}</span></p>
                   </div>
                </div>
                <div>
                        <p className="text-md">TK. {item.subtotal}</p>
                </div>
                    </div>
                   
                </div>)
            }
                 
             <div className="border-t-2 border-b-2 mt-5">
                        <div className="flex justify-between items-center mt-5 mb-5">
                        <p>Subtotal :</p>
                    <p className="text-md">TK. {totalPrice}</p>
                        </div>
                        <div className="flex justify-between items-center mt-5 mb-3">
                            <p>Shopping : </p>
                             <p>Calculated at next step</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-5 mb-3">
                        <p>Total :</p>
                <p className="text-md">TK. {totalPrice}</p>
                    </div>
        </div>
        <div className="lg:w-1/2 md:border-r-2 md:pr-10">
            <p className="text-2xl text-blue-600 text-center mt-10 mb-10">Pickaboo</p>
            <div className="mb-5">
                <p className="text-lg">Your Information</p>
            </div>
                <div>
                    <div className="border-2 p-2">
                    <div className="flex items-center justify-between mb-3">
                            <p>Contact</p>
                            <p>{bookingInformation?.number}</p>
                            <Link to={'/addToCartDetail'}><p className=" cursor-pointer text-blue-600">change</p></Link>
                        </div>
                        <hr />
                    <div className="flex items-center justify-between gap-10 mt-3">
                        <p className="w-20">Ship to </p>
                            <p>{bookingInformation?.country},{bookingInformation?.division}, {bookingInformation?.city},{bookingInformation?.thana}, {bookingInformation?.postCode}</p>
                           <Link to={'/addToCartDetail'}> <p className=" cursor-pointer text-blue-600">change</p></Link>
                    </div>
                    </div>
                    <div className="mt-20">
                        <p>Shopping Method</p>
                        
                        <div className="border-2 p-3 mt-3">
                            <div className="flex justify-between">
                                <p className="flex items-center cursor-pointer"><Checkbox onClick={()=>setBookingMethod('inside Dhaka.free')}></Checkbox>Inside Dhaka</p>
                                <p className=" cursor-pointer text-blue-600">Free</p>
                            </div>
                            <hr />
                            <div className="flex justify-between">
                                <p className="flex items-center cursor-pointer"><Checkbox  onClick={()=>setBookingMethod('Outside Dhaka. free')}></Checkbox> Outside Dhaka</p>
                                <p className=" cursor-pointer text-blue-600">Free</p>
                           </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleUpdate}>
                <div className="w-full mt-10">
                        <p className="mb-1">Currency</p>
                        <select defaultValue={'BDT'} required name="currency" className="w-full border-2 p-2 rounded-md cursor-pointer">
                            <option value="BDT">BDT</option>
                            <option value="USD">USD</option>
                         </select>
                        
                   </div>
                <div className="flex justify-between mt-5 mb-5">
                    <Link className="text-blue-600 underline" to={'/addToCartDetail'}>Return to information</Link>
                    <Button disabled={loading} type="submit" className="bg-blue-600">Conform Order</Button>
            </div>
               </form>
            </div>
    </div>
    );
};

export default BookingDetails;