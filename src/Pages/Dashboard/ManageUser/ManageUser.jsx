import { Avatar, Card, IconButton, Typography } from "@material-tailwind/react";
import UseAllUser from "../../../Hook/UseAlluser/UseAlluser";
import { FaUserTag, FaUserTie } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
 
import Swal from "sweetalert2";
import axios from "axios";
const TABLE_HEAD = ["Photo", "User Details", "Add Admin", "Add Seller","Delete"];
const ManageUser = () => {
  const [allUsers,refetch] = UseAllUser()
   
  const handleAdmin = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "User is a admin"
      }).then((result) => {
        if (result.isConfirmed) {
          axios.patch(`https://bata-server.vercel.app/users/method/${id}`,{admin:'admin'})
          .then(data => {
            if (data.data.modifiedCount>0) {
              refetch()
              Swal.fire({
                title: "admin",
                text: "successful admin your user",
                icon: "success"
              });
           }
        })
        }
      });
     
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  const handleSeller = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "User is a seller"
      }).then((result) => {
        if (result.isConfirmed) {
          axios.patch(`https://bata-server.vercel.app/users/method/${id}`,{admin:'seller'})
          .then(data => {
            if (data.data.modifiedCount>0) {
              refetch()
              Swal.fire({
                title: "seller",
                text: "successful seller your user",
                icon: "success"
              });
           }
        })
        }
      });
     
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }
  const handleDelete = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "User is a admin"
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`https://bata-server.vercel.app/users/${id}`)
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
     
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }
    return (
        <>
        <Card className="w-full overflow-scroll lg:overflow-hidden shadow-none rounded-none mt-10 mb-10">
     <table className="w-full min-w-max table-auto text-left">
       <thead>
         <tr>
           {TABLE_HEAD.map((head) => (
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
         {allUsers?.map(({image,name,email ,method,_id}, index) => {
           const isLast = index === allUsers?.length - 1;
           const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

           return (
             <tr key={_id}>
               <td className={classes}>
               <Avatar
                          src={image}
                          alt={image}
                          size="lg"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
               </td>
               <td className={classes}>
                 <Typography
                   variant="small"
                   color="blue-gray"
                   className="font-normal"
                 >
                   {name} <br />
                   <span>{email}</span>
                 </Typography>
               </td>
               <td className={classes}>
                 <Typography
                   as="a"
                   variant="small"
                   color="blue-gray"
                   className="font-medium"
                 >
                   {
                     method==='admin' ? <p className="bg-orange-600 w-20 text-center py-1 rounded-md">{method}</p>: <IconButton onClick={()=>handleAdmin(_id)} className="bg-blue-600">
                     <FaUserTie className="text-xl" />
                    </IconButton>
                  }
                 </Typography>
               </td>
               <td className={classes}>
                 <Typography
                   as="a"
                   variant="small"
                   color="blue-gray"
                   className="font-medium"
                 >
                   {
                     method === 'seller' ? <p className="bg-orange-600 w-20 text-center py-1 rounded-md">{method}</p>:<IconButton onClick={()=>handleSeller(_id)} className="bg-blue-600">
                     <FaUserTag className="text-xl" />
                    </IconButton>
                   }
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
                   <IconButton onClick={()=>handleDelete(_id)} className="bg-blue-600">
                   <RiDeleteBinLine  className="text-xl"/>
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

export default ManageUser;