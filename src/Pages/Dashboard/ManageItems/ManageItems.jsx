import UseProducts from "../../../Hook/UseProducts/UseProducts";
import { Card, IconButton, Spinner, Typography } from "@material-tailwind/react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../component/AxiosInterceptors/UseAxiosSecure";
 
const TABLE_HEAD = ["Photo","Tittle","Price","Delete","Edit"];
const ManageItems = () => {
    const [AllProducts, isLoading,refetch] = UseProducts()
    const [axiosInterceptors]=UseAxiosSecure()
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
              if (result.isConfirmed) {
                  axiosInterceptors.delete(`/productsDelete/${id}`)
                      .then(data => {
                          if (data.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                      }
                  })
            }
          });
    }
    const handleEdit = (id) => {
      console.log(id)
  }

    if (isLoading) {
         return <Spinner className="h-16 w-16 text-blue-600 mt-10 mx-auto" />;
     }
    return (
        <>
         <Card className="w-full overflow-scroll lg:overflow-hidden shadow-none rounded-none mt-10 mb-10">
     <table className="w-full min-w-max table-auto text-left">
       <thead>
         <tr>
           {TABLE_HEAD?.map((head) => (
             <th
               key={head}
               className="border-b border-blue-gray-100 bg-blue-600 text-white p-4"
             >
               <Typography
                 variant="small"
                 color="white"
                 className="font-normal leading-none opacity-70"
               >
                 {head}
               </Typography>
             </th>
           ))}
         </tr>
       </thead>
       <tbody>
         {AllProducts?.map(({image,tittle,price,_id}, index) => {
           const isLast = index === AllProducts?.length - 1;
           const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

           return (
             <tr key={_id}>
               <td className={classes}>
                <img src={image[0]} alt="image" className="w-20 h-20 border-2 rounded-md" />
               </td>
               <td className={classes}>
                 <Typography
                   variant="small"
                   color="blue-gray"
                   className="font-normal w-32"
                 >
                   {tittle}
                   
                 </Typography>
               </td>
               <td className={classes}>
                 <Typography
                   as="a"
                   variant="small"
                   color="blue-gray"
                   className="font-medium"
                 >
                    ৳{price}
                 </Typography>
               </td>
               <td className={classes}>
                 <Typography
                   as="a"
                   variant="small"
                   color="blue-gray"
                   className="font-medium"
                 >
                    <IconButton onClick={()=>handleDelete(_id)} size="sm" className="bg-blue-600 hover:bg-red-600"><RiDeleteBinLine className="text-xl"></RiDeleteBinLine></IconButton>
                 </Typography>
               </td>
               <td className={classes}>
                 <Typography
                   as="a"
                   href="#"
                   variant="small"
                   color="blue-gray"
                   className="font-medium"
                 >
                  <IconButton onClick={()=>handleEdit(_id)} size="sm" className="bg-orange-600 hover:bg-blue-600">
                          <BiEdit className="text-xl"></BiEdit>     
                   </IconButton>
                 </Typography>
               </td>
             </tr>
           );
         })}
       </tbody>
     </table>
   </Card> 
        </>
    );
};

export default ManageItems;