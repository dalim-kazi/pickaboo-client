import { Card, IconButton } from "@material-tailwind/react";
import UseManageBooking from "../../../Hook/UseManageBooking/UseManageBooking";
import { RiDeleteBinLine } from "react-icons/ri";
import UseAxiosSecure from "../../../component/AxiosInterceptors/UseAxiosSecure";
import Swal from "sweetalert2";

const ManageBookings = () => {
    const [axiosSecure]=UseAxiosSecure()
    const [manageBookings, refetch] = UseManageBooking()
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "booking products delete"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`http://localhost:5000/adminBooking/${id}`)
                .then(data => {
                if (data.data.deletedCount>0) {
                  refetch()
                  Swal.fire({
                    title: "delete",
                    text: "successful delete your user",
                    icon: "success"
                  });
               }
            })
            }
          });
      }
    return (
        <>
         <>
       <Card className="rounded-none shadow-none">
                    <div className="flex justify-between  mt-10 mx-5 mb-2">
                    <p className="text-[1.4rem]">Products Summary</p>    
                    <p className="text-lg">Total Booking : { manageBookings.length}</p>
                    </div>
                {
                    manageBookings?.map(items => <div key={items._id} className="border-[1rem] mb-5 rounded-md">
                        <div className="flex justify-between border-b-2 py-5 m-5">
                        <p><span className="text-xl text-orange-600">Order#</span>{items?.transitionId}</p>
                        <p>{items?.paymentDate}</p>
                        <IconButton onClick={()=>handleDelete(items._id)} size="sm" className=" bg-orange-600 rounded-md"><RiDeleteBinLine className="text-xl"></RiDeleteBinLine></IconButton>
                       </div>
                        {items?.products?.map(item => <div key={item?._id}>
                           
                            <div className="flex justify-between m-5">
                               <div className="border-2 rounded-lg"> <img className="w-32 h-32" src={item?.image} alt="" /></div>
                                <div>
                                    <p>{item?.tittle}</p>
                                    <p>Brand : {item?.brand}</p>
                                    <p>Color : {item?.color}</p>
                                    {item?.size?<p>Size : {item?.size}</p>:<></>}
                                </div>
                                <p>Price : ৳. {item?.price}</p>
                                <p>Quantity : {item?.quantity}</p>
                                <p>Subtotal : ৳. {item?.subtotal}</p>
                            </div>
                        </div>)}
                        <div className="flex justify-between border-y-2 p-2 m-5">
                            <p className="text-lg text-orange-600">Total Price :</p>
                            <p className="text-xl text-orange-600">৳{items?.totalPrice}</p>
                        </div>
                        <div>
                            <p className="text-2xl mx-24 mb-2">Address</p>
                            <div className="flex justify-between mx-20">
                                <div className="bg-gray-100 px-10 py-5 mb-5 rounded-lg">
                                    <p className="text-xl mb-2">Billing Address</p>
                                    <p>{items?.bookingInformation?.firstName} {items?.bookingInformation?.lastName}</p>
                                    <p>{items?.bookingInformation?.number}</p>
                                    <p>{items?.bookingInformation?.email}</p>
                                    <p>{items?.bookingInformation?.country},{items?.bookingInformation?.division},{items?.bookingInformation?.city},{items?.bookingInformation?.thana}</p>
                                </div>
                                <div className="bg-gray-100 px-10 py-5 mb-5 rounded-lg">
                                    <p className="text-xl mb-2">Shipping Address</p>
                                    <p>{items?.bookingInformation?.firstName} {items?.bookingInformation?.lastName}</p>
                                    <p>{items?.bookingInformation?.number}</p>
                                    <p>{items?.bookingInformation?.email}</p>
                                    <p>{items?.bookingInformation?.country},{items?.bookingInformation?.division},{items?.bookingInformation?.city},{items?.bookingInformation?.thana}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                 }
        </Card>
        </>
        </>
    );
};

export default ManageBookings;