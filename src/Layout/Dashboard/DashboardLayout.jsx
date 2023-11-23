import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import { BiCart } from "react-icons/bi";
import { FaBars, FaBook, FaHome} from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { GrAddCircle } from "react-icons/gr";
import { Link } from "react-router-dom";
import UseAddToCart from "../../Hook/UseAddToCart/UseAddToCart";
import UseManageBooking from "../../Hook/UseManageBooking/UseManageBooking";
import UseAllUser from "../../Hook/UseAlluser/UseAlluser";
import DashBoardDrawer from "../../component/DashBoardDrawer/DashBoardDrawer";
import UseProducts from "../../Hook/UseProducts/UseProducts";
 

const DashboardLayout = () => {
  const [cartProducts] = UseAddToCart()
  const [manageBookings] = UseManageBooking()
  const [allUsers] = UseAllUser()
  const [AllProducts]=UseProducts()
    return (
        
        <>
         <Card className="h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none border-r-2 hidden lg:block">
      <div className="mb-2 p-4">
        <Typography className="text-blue-600 text-2xl text-center" variant="h5" color="blue-gray">
              Pickaboo
        </Typography>
      </div>
            <List>
            <ListItem>
              <ListItemPrefix>
               <FaHome></FaHome>
              </ListItemPrefix>
             <Link to={'/dashboard/adminHome'}>Admin Home</Link>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
              <FaUserGear />
              </ListItemPrefix>
                  <Link to={'/dashboard/manageUser'}>Manage User</Link>
                 <ListItemSuffix>
                <Chip value={allUsers?.length} size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
               <FaBook></FaBook>
                </ListItemPrefix>
                <Link to={'/dashboard/manageBookings'}>Manage Bookings</Link>
              <ListItemSuffix>
                <Chip value={manageBookings?.length} size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
               <FaBars></FaBars>
                </ListItemPrefix>
              <Link to={'/dashboard/manageItems'}> Manage Items</Link>
              <ListItemSuffix>
                <Chip value={AllProducts?.length} size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
              <GrAddCircle />
              </ListItemPrefix>
            <Link to={'/dashboard/addItem'}>Add Item</Link>
            </ListItem>
          </List>  
          <hr />
          <List>
          <ListItem>
          <ListItemPrefix>
          <FaHome></FaHome>
          </ListItemPrefix>
              <Link to={'/'}>Home</Link>
             <ListItemSuffix>
            
          </ListItemSuffix>
            </ListItem>
            <ListItem>
          <ListItemPrefix>
           <BiCart />
          </ListItemPrefix>
              <Link to={'/addToCartView'}>My Cart</Link>
             <ListItemSuffix>
            <Chip value={cartProducts?.length} size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
          </List>
        </Card>
        <div className="lg:hidden">
        <DashBoardDrawer></DashBoardDrawer>
       </div>
        </>
    );
};

export default DashboardLayout;