import React from "react";
import {
    Drawer, Button, Typography, IconButton, List, ListItem, ListItemPrefix,
ListItemSuffix,Chip} from "@material-tailwind/react";
import { FaBars, FaBook, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUserGear } from "react-icons/fa6";
import { GrAddCircle } from "react-icons/gr";
import UseAddToCart from "../../Hook/UseAddToCart/UseAddToCart";
import UseAllUser from "../../Hook/UseAlluser/UseAlluser";
import UseManageBooking from "../../Hook/UseManageBooking/UseManageBooking";
import { BiCart } from "react-icons/bi";
const DashBoardDrawer = () => {
    const [open, setOpen] = React.useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    const [cartProducts] = UseAddToCart()
    const [manageBookings] = UseManageBooking()
    const [allUsers]=UseAllUser()
    return (
        <React.Fragment>
       <p></p><Button onClick={openDrawer} className="rounded-sm bg-orange-600"><FaBars className="text-xl"/></Button>
      <Drawer open={open} onClose={closeDrawer} placement="right">
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
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
      </Drawer>
    </React.Fragment>
    );
};

export default DashBoardDrawer;