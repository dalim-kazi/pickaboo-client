import { Navbar,Typography,IconButton,Button,Input,MenuItem,MenuList,Menu,
MenuHandler,Avatar } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { FaRegHeart, FaUser } from 'react-icons/fa';
import React, { useContext} from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Cart from "../../component/Cart/Cart";
import UseAdmin from "../../Hook/UseAdmin/UseAdmin";
import axios from "axios";
 

const Header = () => {
  const {user,logOut,handleSearchProducts}=useContext(AuthContext)
  const [isAdmin] = UseAdmin()
   const Navigate =useNavigate()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const handleLOgOut = () => {
    logOut()
    .then(()=>{})
  }
  const handleSearch = (e) => {
    e.preventDefault()
    const searchValue = e.target.search.value 
    axios.get(`http://localhost:5000/search/api?value=${searchValue}`)
      .then(data => {
          const products = data.data
          handleSearchProducts(products)
          Navigate('/searchProducts') 
  })
   }
    return (
        <>
         <Navbar
      variant="gradient"
      color="blue"
      className=" max-w-full rounded-none px-4 py-3"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
            <Link to={'/'}>
            <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
           <img src="data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IlhNTElEIDIyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMjguNjA5Ij48cGF0aCBkYXRhLW5hbWU9IlhNTElEIDQwIiBkPSJNNC40MDUgMjYuNDEzYTIuMTEgMi4xMSAwIDAxLS42NDUgMS41NDggMi4xMDYgMi4xMDYgMCAwMS0xLjU1NC42NUgwVjEyLjUyOXEwLTQuNTE2IDIuNjU3LTYuMTcxYTEwLjc0MiAxMC43NDIgMCAwMTUuNzcyLTEuNjQ1IDkuMjM3IDkuMjM3IDAgMDEzLjI3MS42MTUgNi4xMzEgNi4xMzEgMCAwMTIuNjI5IDEuNzc2IDEwLjI2NyAxMC4yNjcgMCAwMTEuOTQyIDYuNDYxIDEwLjUyIDEwLjUyIDAgMDEtMS45NDIgNi41ODYgNi4wODkgNi4wODkgMCAwMS00Ljk5NSAyLjQ1MyA2LjYgNi42IDAgMDEtMi44NTEtLjU4IDQuODU2IDQuODU2IDAgMDEtMi4wNzQtMnY2LjM4OXptNy40LTEyLjY2YTYuNjE2IDYuNjE2IDAgMDAtLjk3MS0zLjg3N0EzLjIyOCAzLjIyOCAwIDAwOC4wNCA4LjUyMWEzLjE2NyAzLjE2NyAwIDAwLTIuNzI2IDEuMzU0IDYuNTkgNi41OSAwIDAwLS45MDkgMy44NzcgNS44NzQgNS44NzQgMCAwMC45NzEgMy42ODMgMy4yMTIgMy4yMTIgMCAwMDIuNzg5IDEuMzU0IDMuMSAzLjEgMCAwMDIuNjU3LTEuMzU0IDYuMTc2IDYuMTc2IDAgMDAuOTc4LTMuNjgzeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGRhdGEtbmFtZT0iWE1MSUQgMzciIGQ9Ik0xNy4wNDUuMDYyaDIuMzMxYTIuMTUzIDIuMTUzIDAgMDExLjU2MS42NDMgMi4xMSAyLjExIDAgMDEuNjQ1IDEuNTQ4djEuMzU0aC00LjUzN3ptMCA1LjAzOGgyLjMzMWEyLjEzMiAyLjEzMiAwIDAxMS41NjEuNjUgMi4xMSAyLjExIDAgMDEuNjQ1IDEuNTQ4djE0Ljk4MWgtNC41Mzd6IiBmaWxsPSIjZmZmIi8+PHBhdGggZGF0YS1uYW1lPSJYTUxJRCAzNiIgZD0iTTM0LjczNSAxNi45ODZoMy4yNGE3LjAyNyA3LjAyNyAwIDAxLTIuNzMgNC4xMzIgOC4yODkgOC4yODkgMCAwMS01LjA1NyAxLjQ4NiA3LjIzOCA3LjIzOCAwIDAxLTUuNzY5LTIuMzkxcS0yLjA4MS0yLjMyMi0yLjA3NC02LjY1NWE5LjU5IDkuNTkgMCAwMTIuMDEyLTYuNDYxIDcuMjQ1IDcuMjQ1IDAgMDE1Ljc3Mi0yLjM4NCA3Ljc4OSA3Ljc4OSAwIDAxNi4wMjggMi4zMjIgOC44ODIgOC44ODIgMCAwMTEuNjg4IDMuMjg5aC00LjUzOWEzLjc2NSAzLjc2NSAwIDAwLS42NDUtLjk2NyAzLjEyMyAzLjEyMyAwIDAwLTIuNC0uOTA1IDMuMTY0IDMuMTY0IDAgMDAtMi4zMzEuOTA1IDYuMyA2LjMgMCAwMC0xLjE2NiA0LjI2M2MwIDEuOTgzLjM4OCAzLjM3OSAxLjE2NSA0LjJhMy4wNjEgMy4wNjEgMCAwMDIuNTMyIDEuMDMgMy43MjcgMy43MjcgMCAwMDEuODg0LS40NDguODIxLjgyMSAwIDAwLjM1NC0uMjI4Yy4xLS4xLjIyOS0uMjIxLjM1NC0uMzUyYTIuNTQyIDIuNTQyIDAgMDEuNTItLjUxOCAxLjc4OSAxLjc4OSAwIDAxMS4xNjItLjMxOHoiIGZpbGw9IiNmZmYiLz48cGF0aCBkYXRhLW5hbWU9IlhNTElEIDM1IiBkPSJNNDMuMjgxIDUuMXY2LjMzbDUuNTE1LTYuMzNoNS40NDhsLTYuMTYgNi41ODYgNi4yMiAxMC41OTNoLTUuNDQ2bC0zLjE3Ny01LjgxMmMtLjY0NS0xLjE2MS0xLjIwNy0xLjY1OC0xLjY4Ni0xLjQ4NnMtLjcxNS40MzUtLjcxNS43NzR2Ni41MjNoLTQuNTM2Vi4wNjJoMi4zMzhhMi4xMjYgMi4xMjYgMCAwMTEuNTU0LjY0MyAyLjA0IDIuMDQgMCAwMS42NDUgMS40ODZWNS4xeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGRhdGEtbmFtZT0iWE1MSUQgMzIiIGQ9Ik02Ni40NzMgMjEuNTY3YTcuODkzIDcuODkzIDAgMDEtMi44ODYuODcxYy0xLjAyLjEtMS45MTUuMTU5LTIuNjkyLjE1OWE2Ljg1MyA2Ljg1MyAwIDAxLTQuMDg2LTEuMjU4IDQuNzg1IDQuNzg1IDAgMDEtMS43NDgtNC4xNjcgNC40NzUgNC40NzUgMCAwMTEuNTg5LTMuODc2IDkuMTIyIDkuMTIyIDAgMDE0LjA1MS0xLjU0OCA0LjAxNSA0LjAxNSAwIDAwLjc3Ny0uMSAxMS4zNiAxMS4zNiAwIDAxMS4wNDEtLjE1OXEyLjg1MS0uMzg0IDIuODUxLTEuNjc5YTEuMjE4IDEuMjE4IDAgMDAtMS4wMDktMS4yNTUgNi43NCA2Ljc0IDAgMDAtMS44NDUtLjI5IDQuOTM3IDQuOTM3IDAgMDAtMS42MjMuMjU2IDEuNzU3IDEuNzU3IDAgMDAtMS4wMzIuOTY3aC00LjM0MmE0Ljk3NCA0Ljk3NCAwIDAxMS44MTgtMy4zIDcuNTA2IDcuNTA2IDAgMDE0Ljk4Ny0xLjQ4MiA5Ljc0NSA5Ljc0NSAwIDAxNS40NDYgMS4yMyA0LjE1MyA0LjE1MyAwIDAxMS44OCAzLjYxNHY1Ljg3NGE3LjQxNCA3LjQxNCAwIDAxLS45MzcgNC4wMzYgNS42MzcgNS42MzcgMCAwMS0yLjI0IDIuMTA3em0tMS4wMzQtNy45NGExMi4zNjcgMTIuMzY3IDAgMDEtMi41MjUuODQzbC0xLjQ5Mi4zMjVhMy44MTggMy44MTggMCAwMC0xLjY4Ni44NDMgMi42IDIuNiAwIDAwLS40NTEgMS40MTcgMi4wOCAyLjA4IDAgMDAuNTgzIDEuNTUxIDIuNDU4IDIuNDU4IDAgMDAxLjY4Ni41MTggMy44NzUgMy44NzUgMCAwMDIuODUxLTEuMDMgMy44MjYgMy44MjYgMCAwMDEuMDM0LTIuODR2LTEuNjI3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGRhdGEtbmFtZT0iWE1MSUQgMjkiIGQ9Ik03NC44MzIgMi4ydjUuMTZhNS4zODcgNS4zODcgMCAwMTIuMDc0LTIgNS44MzIgNS44MzIgMCAwMTIuODUxLS42NCA2LjAzNyA2LjAzNyAwIDAxNC45OTUgMi41MTUgMTAuMzcxIDEwLjM3MSAwIDAxMS45NDIgNi41MjMgMTAuNDE0IDEwLjQxNCAwIDAxLTEuOTQyIDYuNTIzIDUuNDM4IDUuNDM4IDAgMDEtMi42MzIgMS43NzcgMTAuMzI5IDEwLjMyOSAwIDAxLTMuMjc0LjU0NiAxMC45MTcgMTAuOTE3IDAgMDEtNS43NzItMS42MTdxLTIuNjU0LTEuNjE3LTIuNjU0LTYuMTk5VjBoMi4yMDZhMi4xMjYgMi4xMjYgMCAwMTEuNTU0LjY0MyAyLjEgMi4xIDAgMDEuNjUyIDEuNTU3em03LjM4OCAxMS4zNThhNS45MjcgNS45MjcgMCAwMC0uOTcxLTMuNjE0IDMuMDg3IDMuMDg3IDAgMDAtMi42NTctMS4zNTQgMy4yODQgMy4yODQgMCAwMC0yLjc4OSAxLjI5MiA2LjIxNyA2LjIxNyAwIDAwLS45NzEgMy42NzYgNi42NTYgNi42NTYgMCAwMC45MDkgMy45NDIgMy4xNTkgMy4xNTkgMCAwMDIuNzI2IDEuMzU0IDMuMjIgMy4yMiAwIDAwMi43ODktMS4zNTQgNi43ODMgNi43ODMgMCAwMC45NjQtMy45NDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZGF0YS1uYW1lPSJYTUxJRCAyNiIgZD0iTTg5Ljk4OSAyMC43MzFhNi4zNTcgNi4zNTcgMCAwMS0xLjk0Mi0zLjEzMiAxNC4zNzkgMTQuMzc5IDAgMDEtLjU4My00LjEgMTIuOTEgMTIuOTEgMCAwMS40ODYtMy40OSA3LjMyNiA3LjMyNiAwIDAxMS41MTQtMi45MSA2Ljc2NiA2Ljc2NiAwIDAxNC4zNDgtMi4yODkgMTAuMDUyIDEwLjA1MiAwIDAxNC44LjQyMiA2LjU2MyA2LjU2MyAwIDAxMy42MjggMy4zNTggMTAuNjY3IDEwLjY2NyAwIDAxMS4xIDQuOTY5IDEyLjQgMTIuNCAwIDAxLS40NTEgMy41NTIgOS4yMSA5LjIxIDAgMDEtMS4xNjUgMi41MTUgNi40ODggNi40ODggMCAwMS0zLjk1NCAyLjY0NyA4LjgyNiA4LjgyNiAwIDAxLTQuMzA2LjA5NiA3LjUzOCA3LjUzOCAwIDAxLTMuNDc1LTEuNjM4em0zLjExNS0xMS4zNjdhNS45MTYgNS45MTYgMCAwMC0xLjIyOCA0LjQyMiA2Ljk2NCA2Ljk2NCAwIDAwMS4xIDQuMSAyLjg4NiAyLjg4NiAwIDAwMS4zNi44NzEgMy4xMjEgMy4xMjEgMCAwMDEuOTc3LjA2MiAzLjMzIDMuMzMgMCAwMDEuNzgzLTEuNDUxIDcuMjMxIDcuMjMxIDAgMDAuODM5LTMuNzQ1IDYuNTc0IDYuNTc0IDAgMDAtLjc0Mi0zLjQ4MyAzLjM2OCAzLjM2OCAwIDAwLTEuNzItMS40ODYgMy4xNjMgMy4xNjMgMCAwMC0xLjk0Mi0uMDM1IDMuMzUzIDMuMzUzIDAgMDAtMS40MjcuNzQ1eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGRhdGEtbmFtZT0iWE1MSUQgMjMiIGQ9Ik0xMDYuNjQ2IDIwLjczMWE2LjM1NyA2LjM1NyAwIDAxLTEuOTQyLTMuMTMyIDE0LjM3OSAxNC4zNzkgMCAwMS0uNTgzLTQuMSAxMi45MSAxMi45MSAwIDAxLjQ4Ni0zLjQ5IDcuMjQ5IDcuMjQ5IDAgMDExLjUyNi0yLjkxIDYuNzY2IDYuNzY2IDAgMDE0LjM0Mi0yLjI4OSAxMC4wMTUgMTAuMDE1IDAgMDE0Ljc5NC40MjIgNi41NjMgNi41NjMgMCAwMTMuNjI4IDMuMzU4IDEwLjY2NyAxMC42NjcgMCAwMTEuMSA0Ljk2OSAxMi4xNDIgMTIuMTQyIDAgMDEtLjQ1OCAzLjU1MiA5LjAxIDkuMDEgMCAwMS0xLjE2NSAyLjUxNSA2LjQ4OCA2LjQ4OCAwIDAxLTMuOTUzIDIuNjQ2IDguODI4IDguODI4IDAgMDEtNC4zMDguMSA3LjUxMSA3LjUxMSAwIDAxLTMuNDY3LTEuNjQxem0zLjExNS0xMS4zNjdhNS45MTYgNS45MTYgMCAwMC0xLjIyOCA0LjQyMiA2Ljk2NCA2Ljk2NCAwIDAwMS4xIDQuMSAyLjg4NiAyLjg4NiAwIDAwMS4zNi44NzEgMy4xMiAzLjEyIDAgMDAxLjk3Ny4wNjIgMy4zMyAzLjMzIDAgMDAxLjc4My0xLjQ1MSA3LjIzMSA3LjIzMSAwIDAwLjgzOS0zLjc0NSA2LjU3NCA2LjU3NCAwIDAwLS43NDItMy40ODMgMy4zNjggMy4zNjggMCAwMC0xLjcyLTEuNDg2IDMuMTYzIDMuMTYzIDAgMDAtMS45NDItLjAzNSAzLjMxMSAzLjMxMSAwIDAwLTEuNDI3Ljc0NXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=" alt="" />
                    </Typography>
            </Link>
            <form  onSubmit={handleSearch} className="relative flex w-full gap-2 lg:w-1/2 mx-auto hidden lg:block"> 
              <Input
            name="search"
           type="search"
           placeholder="search for products and more"
            color="blue"
            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
              />
            
          <Button
            size="sm"
             type="submit"
            color="white"
            className="!absolute right-1 top-1 rounded-full bg-blue-100 hover:bg-red-600"
          >
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJNMCAwaDE2djE2SDB6IiBmaWxsPSIjMTI5OWU4Ii8+PC9jbGlwUGF0aD48L2RlZnM+PGcgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDYwIiBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGQ9Ik0xNS40ODkgMTQuNTczbC0zLjgwOC0zLjk2YTYuNDU3IDYuNDU3IDAgMTAtNC45NDUgMi4zMDcgNi4zOTEgNi4zOTEgMCAwMDMuNy0xLjE2OWwzLjgzNyAzLjk5MWEuODQzLjg0MyAwIDEwMS4yMTQtMS4xNjh6TTYuNzM2IDEuNjg1QTQuNzc1IDQuNzc1IDAgMTExLjk2MiA2LjQ2YTQuNzggNC43OCAwIDAxNC43NzQtNC43NzV6IiBmaWxsPSIjMTI5OWU4Ii8+PC9nPjwvc3ZnPg==" alt="" />
          </Button>
       </form>
        <div className="ml-auto flex gap-1 lg:mr-10">
              {
                user? <></>:<Button size="sm" variant="outlined" color="white" className="rounded-sm hover:bg-white hover:text-blue-600 md:mr-5">
             <Link to={"/login"}>Login</Link>
          </Button>
            }
          <Cart></Cart>
              {
                user?<Link to={"/favoriteProducts"}>
                <IconButton variant="text" color="white" className="md:mr-5">
               <FaRegHeart className="md:text-2xl text-xl w-20"></FaRegHeart>               
                          </IconButton>
                </Link>:<Link to={"/login"}>
              <IconButton variant="text" color="white" className="md:mr-5">
             <FaRegHeart className="md:text-2xl text-xl w-20"></FaRegHeart>               
                        </IconButton>
              </Link>
              }
                        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
              {
              user?<Avatar
              variant="circular"
              size="sm"
              alt="tania andrew"
              className="border border-gray-900 p-0.5"
              src={user?.photoURL}
            /> :<FaUser className="text-xl text-white"></FaUser>        
          }
           
        </Button>
      </MenuHandler>
                {
                  user?<MenuList onClick={closeMenu} className="p-2 mt-2">
                  <MenuItem>
                      <Link> <Typography
                        size='sm'
                         className="flex items-center gap-2"
                       >
                      <CgProfile />
                      My Profile 
                     </Typography></Link>
                     </MenuItem>
                            {
                              isAdmin==='admin'?<MenuItem>
                              <Link to={'/dashboard/adminHome'}> <Typography
                          size='sm'
                           className="flex items-center gap-2"
                         >
                         <RxDashboard></RxDashboard>
                           Dashboard
                       </Typography></Link>
                              </MenuItem>:<></>
                            }
                            <MenuItem>
                            <Link to={'/myOrder'}> <Typography
                        size='sm'
                         className="flex items-center gap-2"
                       >
                      <CgProfile />
                      My Orders 
                     </Typography></Link>
                            </MenuItem>
                            <MenuItem>
                            <Link> <Typography
                        size='sm'
                         className="flex items-center gap-2"
                       >
                      <Button size="sm" className="rounded-none w-full" onClick={handleLOgOut}>LogOut</Button>
                     </Typography></Link>
                            </MenuItem>
                </MenuList>:<></>
      }
    </Menu>
        </div>
            <form onSubmit={handleSearch} className="relative flex w-full gap-2 lg:w-1/2 mx-auto lg:hidden">
              <Input
              name="search"
            type="search"
            color="blue"
            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
            <Button
             size="sm"
            type="submit"
            color="white"
            className="!absolute right-1 top-1 rounded-full bg-blue-100 hover:bg-red-600"
          >
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJNMCAwaDE2djE2SDB6IiBmaWxsPSIjMTI5OWU4Ii8+PC9jbGlwUGF0aD48L2RlZnM+PGcgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDYwIiBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGQ9Ik0xNS40ODkgMTQuNTczbC0zLjgwOC0zLjk2YTYuNDU3IDYuNDU3IDAgMTAtNC45NDUgMi4zMDcgNi4zOTEgNi4zOTEgMCAwMDMuNy0xLjE2OWwzLjgzNyAzLjk5MWEuODQzLjg0MyAwIDEwMS4yMTQtMS4xNjh6TTYuNzM2IDEuNjg1QTQuNzc1IDQuNzc1IDAgMTExLjk2MiA2LjQ2YTQuNzggNC43OCAwIDAxNC43NzQtNC43NzV6IiBmaWxsPSIjMTI5OWU4Ii8+PC9nPjwvc3ZnPg==" alt="" />
          </Button>
       </form>
      </div>
    </Navbar>
        </>
    );
};

export default Header;