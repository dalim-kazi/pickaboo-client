import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import { Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import UseBookingInformation from "../../../Hook/UseBookingInformation/UseBookingInformation";
import UseProductsView from "../../../Hook/UseProductsView/UseProductsView";

const ProductsOverViewDetails = () => {
    const { user } = useContext(AuthContext)
    const Navigate = useNavigate()
    const [viewProducts,refetch]=UseProductsView()
    const [bookingInformation]=UseBookingInformation()
    const [loading,setLoading]=useState(false)
    const totalPrice =viewProducts?.reduce((accumulator, currentValue)=>accumulator + currentValue.subtotal ,0)
      
  const { register,handleSubmit} = useForm()
    
    const onSubmit = (data) => {
        setLoading(true)
        axios.delete(`https://bata-server.vercel.app/bookingInformation?email=${user?.email}`)
            .then(res => {
            if (res.data.acknowledged) {
                refetch()
                console.log(res)
                const bookingInformation = {
                    email:user.email,
                    number: data.mobileNumber,
                    country: data.country,
                    firstName: data.firstName,
                    lastName: data.LastName,
                    division: data.division,
                    city: data.city,
                    thana: data.thana,
                    postCode: data.postCode,
                }
                axios.post('https://bata-server.vercel.app/bookingInformation', bookingInformation)
                    .then(data => {
                        if (data.data.insertedId) {
                            console.log(data)
                            setLoading(false)
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'successful your information',
                                showConfirmButton: false,
                                timer: 1500
                            })
                           Navigate('/productsViewBookingDetails') 
                    }
                    })
                    .catch(error => {
                        return <div>{error}</div>
                })
            }
            })
            .catch(error => {
                return <div>{error}</div>
        })
    }
    refetch()
    return (
        <div className="lg:flex lg:flex-row-reverse lg:w-full laptop:w-4/6 w-11/12 gap-10 mx-auto lg:px-5 px-1">
        <div className="lg:w-1/2 text-center mb-32 pr-1">
            <div className="mt-10">
                <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-01%2F21b894f9-5c0d-4513-be40-f813b222deb8%2Fgm_696973d1_5abe_4e2a_824a_54906e71068a_10_returnsomething_bought_online.jpg?rect=83%2C0%2C1854%2C1043&auto=format%2Ccompress&fmt=webp&format=webp&w=900&dpr=1.3" alt="" /> 
            </div> 
             
            {
                viewProducts?.map(item=><div key={item._id}>
                    <div className="flex justify-between items-center mt-5">
                <div className="flex items-center text-start gap-3">
                    <div className="w-28 h-28 border-2 rounded-lg bg-blue-gray-400 relative">
                                <img className="w-full h-full" src={item?.image} alt="" />
                                <p className="absolute -top-2 -right-2 text-white w-6 h-6 rounded-full bg-gray-600"><span className="pl-2">{item?.quantity}</span></p>
                            </div>
                            
                    <div className="w-40 md:w-48">
                        <p>{item?.tittle?.slice(0,40)}...</p> 
                        <p> <span>{item?.productSize}</span>/<span>{item?.color}</span>/<span>{item?.brand}</span></p>
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
        <div className="lg:w-1/2 md:border-r-2 lg:pr-5">
            <p className="text-2xl text-blue-600 text-center mt-10 mb-10">Pickaboo</p>
            <div className="mb-5">
                <p className="text-lg">Contact</p>
                 
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input size="md" defaultValue={bookingInformation?.number} label="Mobile phone number" {...register("mobileNumber", { required: true })} color="blue" />
            <div className="mt-5 mb-32">
                <p className="mb-2 text-lg">Shopping Address</p>
                 
                    <Input defaultValue={bookingInformation?.country} {...register("country", { required: true })} size="md" label="Country / region" color="blue" />
                    <div className="grid md:grid-cols-2 mt-3 mb-3 gap-3">
                        <Input  defaultValue={bookingInformation?.firstName} {...register("firstName", { required: true })} size="md" label="First name" color="blue" /> 
                        <Input defaultValue={bookingInformation?.lastName} {...register("LastName", { required: true })} size="md" label="Last name" color="blue" />    
                    </div>
                    <Input defaultValue={bookingInformation?.country} size="md" label="Address" color="blue" /> 
                    <div className="grid md:grid-cols-2 mt-3 mb-3 gap-3">
                        <Input defaultValue={bookingInformation?.division} {...register("division", { required: true })}
                            size="md" label="Division" color="red" />
                        <Input defaultValue={bookingInformation?.city} {...register("city", { required: true })} size="md" label="City" color="red" />
                        <Input defaultValue={bookingInformation?.thana} {...register("thana", { required: true })}
                            size="md" label="Thana" color="red" />
                        <Input defaultValue={bookingInformation?.postCode} {...register("postCode", { required: true })} size="md" label="Post Code" color="red" />
                    </div>
                    <div>
                        <p>	I have read and agreed to the website <Link className="text-blue-600" to={"/terms-and-condition"}>terms and conditions</Link></p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 justify-between mb-10 mt-5">
                        <Link to={`/sidePages/men`} className="text-blue-600">Return to Cart</Link>
                       
                            <Input type="submit"
                                disabled={loading}
                         value={'Shopping Continue'}
                         color="blue"
                        size="sm"
                        className="!border !border-gray-300 !bg-blue-600 text-white shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 cursor-pointer"
                         labelProps={{
                           className: "hidden",
                         }}
                         containerProps={{ className: "min-w-[80px]" }}/>   
                    </div>
                
            </div>
            </form>
        </div>
    </div>
    );
};

export default ProductsOverViewDetails;