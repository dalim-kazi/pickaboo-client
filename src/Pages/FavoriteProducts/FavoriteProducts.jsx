 import { useQuery } from "react-query";
import axios from "axios";
import { Button, Card, Spinner, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { LiaTimesSolid } from 'react-icons/lia';
import { HiHome } from "react-icons/hi2";
import Swal from "sweetalert2";
const TABLE_HEAD = ["PRODUCT IMAGE", "PRODUCT NAME", "UNIT PRICE", "REMOVE","ADD"];
 
const FavoriteProducts = () => {
    const {data:products=[],isLoading,refetch } = useQuery({
        queryKey: ['favoriteProducts'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/favoriteProducts')
            return res.data
        }
    })

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/favoriteProducts/${id}`)
      .then(data => {
        if (data.data.deletedCount > 0) {
          refetch()
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
     {if (isLoading) {
            return <Spinner className="h-16 w-16 text-blue-600 mx-auto mt-20 mb-20" />
  }
  }
  const array = {
    u:">"
  }
    return (
        <>
        {
          products?.length > 0 ?
          <div>
          <div className="mx-auto mt-10 mb-3 lg:w-5/6 ">
            <p className="flex items-center text-orange-600 gap-1"><HiHome className="text-2xl"></HiHome> <Link to={'/'}>Home</Link>{array.u} favorite products</p>
            <p className="text-xl mt-9">YOUR FAVORITE PRODUCTS LIST</p>
          </div>
              <Card className="h-full lg:w-5/6 overflow-x-auto md:overflow-hidden mx-auto shadow-none rounded-none mb-10">
              
        <table className="w-full min-w-max table-auto bg-gray-400 text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="bg-gray-200 pt-6 text-center pb-1"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products?.map(({ image, tittle, price, _id}, index) => {
              const isLast = index === products?.length - 1;
              const classes = isLast ? "p-4" :"p-4 border-b border-blue-gray-50";
              return (
                <tr key={_id} className="bg-white border-[2rem] text-center">
                  <td className={classes}>
                    <img className="w-32 h-32" src={image[0]} alt="" />
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal w-1/2 text-start mx-auto"
                    >
                      {tittle}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                     TK. {price}
                    </Typography>
                  </td>
                  <td className={classes}>
                     <Button onClick={()=>handleDelete(_id)} variant="outlined" size="sm" color="red" className="rounded-none hover:bg-red-600 hover:text-white"><LiaTimesSolid className="text-xl "></LiaTimesSolid></Button>
                      </td>
                      <td className={classes}>
                    <Link to={`/favoriteProductsView/${_id}`}><Button className="rounded-none hover:bg-white hover:text-black border border-black">SHOP NOW</Button></Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
            </div> : <>
            <Card className="mt-10 mb-20 w-4/6 mx-auto p-10">
                            <p className="text-2xl font-bold mb-1">My Favorite Products (0)</p>  
                     <hr />       
                <div className="p-20 mx-auto">
                 <img src="https://www.pickaboo.com/_next/static/images/empry-cart-17e583c2859b7c0951bb12abb2e6808f.svg" alt="" />  
                <p className="text-orange-600 text-2xl mt-10 text-center mb-1">Your Favorite products is empty</p> 
                <p className="text-center">Looks like you haven’t added anything to your cart yet</p>    
                </div>        
            </Card>    
            </>
        }
        </>
    );
};

export default FavoriteProducts;