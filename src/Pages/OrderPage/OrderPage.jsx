import { Button, Card } from "@material-tailwind/react";
import MyOrder from "../../Hook/MyOrder/MyOrder";


const OrderPage = () => {
    const [orders,refetch] = MyOrder()
    refetch()

    return (
    <>
    {
     orders?.length>0? <Card className="rounded-none shadow-none w-4/6 mx-auto mb-10">
    <p className="text-[1.4rem] mt-10 m-5">Orders Products Summary</p>                          
     {
     orders?.map(items => <div key={items._id} className="border-[1rem] mb-5 rounded-md">
      <div className="flex justify-between border-b-2 py-5 m-5">
    <p><span className="text-xl text-orange-600">Order#</span>{items?.transitionId}</p>
    <p>{items?.displayDate}</p>
     <Button size="sm" className=" bg-orange-600 rounded-md">Order Place</Button>
    </div>
     {items?.products?.map(item => <div key={item?._id}>
                                    
      <div className="flex justify-between m-5">
      <div className="border-2 rounded-lg"> <img className="w-32 h-32" src={item?.  image} alt="" /></div>
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
        </Card> : <>
                 <Card className="mt-10 mb-20 w-4/6 mx-auto p-10">
                            <p className="text-2xl font-bold mb-1">My Order products (0)</p>  
                     <hr />       
                <div className="p-20 mx-auto">
                 <img src="https://www.pickaboo.com/_next/static/images/empry-cart-17e583c2859b7c0951bb12abb2e6808f.svg" alt="" />  
                <p className="text-orange-600 text-2xl mt-10 text-center">Your Orders is empty</p> 
                <p className="text-center">Looks like you haven’t added anything to your cart yet</p>    
                </div>        
            </Card>         
        </>
      }
        </>
    );
};

export default OrderPage;