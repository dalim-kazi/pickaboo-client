import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Checkbox,
    IconButton,
    
} from "@material-tailwind/react";
import {HiHome, HiMiniChevronDown} from 'react-icons/hi2';
import  React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBarDrawer from "../../component/SideBarDrawer/SideBarDrawer";

const Sidebar = () => {
    const [open, setOpen] =useState(1);
    
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };
  return(
    <>
     <React.Fragment>
          <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-none rounded-none mb-20 hidden lg:block">
      <div className="mb-2 p-4">
        <Typography className="text-orange-600 text-xl" color="blue-gray">
          <Link to={"/"} className="flex items-center gap-3"><HiHome className="text-2xl"></HiHome>Home</Link>
        </Typography>
      </div>
      <List>
      <Accordion
        className="border-b-2 py-2"
          open={open === 1}
          icon={
            <HiMiniChevronDown
              strokeWidth={2.5}
              className={`mx-auto h-4 w-6 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <Typography color="blue-gray" className="mr-auto font-normal">
              BRAND
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List>
              <ListItem className="h-4">
                <ListItemPrefix>
                <Checkbox  />
                </ListItemPrefix>
               <Link to={'/sidePages/power'}>Power</Link>
              </ListItem>
              <ListItem className="h-4">
                <ListItemPrefix>
                <Checkbox  />
                </ListItemPrefix>
                <Link to={'/sidePages/northStar'}>North Star</Link>
              </ListItem>
              <ListItem className="h-4">
                <ListItemPrefix>
                <Checkbox />
                </ListItemPrefix>
                  <Link to={"/sidePages/BateRedLabel"}>Bate Red Label </Link>
                </ListItem>
                <ListItem className="h-4">
                <ListItemPrefix>
                <Checkbox />
                </ListItemPrefix>
                <Link to={"/sidePages/Adidas "}>Adidas </Link>
                </ListItem>
                <ListItem className="h-4">
                <ListItemPrefix>
                <Checkbox />
                </ListItemPrefix>
                <Link to={"/sidePages/bata"}>Bata</Link>
             </ListItem>
             <ListItem className="h-4">
                <ListItemPrefix>
                <Checkbox />
                </ListItemPrefix>
                  <Link to={"/sidePages/Bate3D"}>Bate 3D</Link>
                </ListItem>
                <ListItem className="h-4">
                <ListItemPrefix>
                <Checkbox />
                </ListItemPrefix>
                  <Link to={"/sidePages/Nike"}>Nike</Link>
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
         className="border-b-2 py-2"
          open={open === 2}
          icon={
            <HiMiniChevronDown
              strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0 " selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              
              <Typography color="blue-gray" className="mr-auto font-normal">
              GENDER
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List>
              <ListItem className="h-4">
                <ListItemPrefix>
               <Checkbox />
                </ListItemPrefix>
                <Link to={'/sidePages/men'}>Mens</Link>
              </ListItem>
              <ListItem className="h-4">
                <ListItemPrefix>
                <Checkbox/>
                </ListItemPrefix>
                <Link to={'/sidePages/women'}>Women</Link>
                </ListItem>
                <ListItem className="h-4">
                <ListItemPrefix>
                <Checkbox/>
                </ListItemPrefix>
                <Link to={'/sidePages/children'}>Children</Link>
                </ListItem>
                <ListItem className="h-4">
                <ListItemPrefix>
                <Checkbox/>
                </ListItemPrefix>
                <Link to={'/sidePages/Accessories'}>Accessories</Link>
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
        className="border-b-2 py-2"
          open={open === 3}
          icon={
            <HiMiniChevronDown
              strokeWidth={2.5}
              className={`mx-auto h-4 w-6 transition-transform ${open === 3 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
              <Typography color="blue-gray" className="mr-auto font-normal">
              COLOR
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List>
                <div className="grid grid-cols-5 gap-3">
                <Link to={'/sidePages/white'}><IconButton variant="outlined" color="red" size="sm" className="rounded-full bg-white border-2 border-red-400">.</IconButton></Link>
                <Link to={'/sidePages/red'}><IconButton variant="outlined" color="red" size="sm" className="rounded-full bg-red-600 border-2 border-red-400">. </IconButton></Link>
                  <Link to={'/sidePages/Black'}><IconButton variant="outlined" color="red" size="sm" className="rounded-full bg-black">.</IconButton></Link>
                  <Link to={"/sidePages/blue"}>
                    <IconButton variant="outlined" color="blue" size="sm" className="rounded-full bg-blue-600">
                      .
                  </IconButton>
                  </Link>
                  <Link to={"/sidePages/gray"}>
                    <IconButton variant="outlined" color="red" size="sm" className="rounded-full bg-gray-600">
                      .
                  </IconButton>
                  </Link>
                  <Link to={"/sidePages/brown"}>
                    <IconButton variant="outlined" color="brown" size="sm" className="rounded-full bg-brown-600">
                      .
                </IconButton>
                  </Link>
                  <Link to={"/sidePages/pink"}>
                    <IconButton variant="outlined" color="pink" size="sm" className="rounded-full bg-pink-600">
                      .
                </IconButton>
                  </Link>
                  <Link to={"/sidePages/green"}>
                    <IconButton variant="outlined" color="green" size="sm" className="rounded-full bg-green-600">
                      .
                </IconButton>
                  </Link>
              </div>
            </List>
          </AccordionBody>
                  </Accordion>
                  <Accordion
          className="border-b-2 py-2"
          open={open === 4}
          icon={
            <HiMiniChevronDown
              strokeWidth={2.5}
              className={`mx-auto h-4 w-6 transition-transform ${open === 4 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 4}>
            <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-3">
              <Typography color="blue-gray" className="mr-auto font-normal">
              PRICE
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List>
              <ListItem className="h-4">
                <ListItemPrefix>
                <Checkbox  />
                </ListItemPrefix>
                  <Link to={"/sidePages/under1000"}>Under Tk. 1000</Link>
              </ListItem>
              <ListItem className="h-4">
                <ListItemPrefix>
                <Checkbox  />
                </ListItemPrefix>
                  <Link to={"/sidePages/under2000"}> TK.1001 -TK.2000</Link>
              </ListItem>
              <ListItem className="h-4">
                <ListItemPrefix>
                <Checkbox />
                </ListItemPrefix>
                <Link to={"/sidePages/under3000"}>TK.2001 -TK.3000</Link>
                </ListItem>
                <ListItem className="h-4">
                <ListItemPrefix>
                <Checkbox />
                </ListItemPrefix>
                <Link to={"/sidePages/under4000"}>TK.3001 -TK.4000</Link>
                </ListItem>
                <ListItem className="h-4">
                <ListItemPrefix>
                <Checkbox />
                </ListItemPrefix>
                <Link to={"/sidePages/under5000"}>TK.4001 -TK.5000</Link>
                </ListItem> 
                <ListItem className="h-4">
                <ListItemPrefix>
                <Checkbox />
                </ListItemPrefix>
                <Link to={"/sidePages/above5000"}>Above Tk. 5000</Link>
              </ListItem>
            </List>
          </AccordionBody>
                  </Accordion>
                  <Accordion
                 open={open === 5}
        >
          <ListItem className="p-0 ">
            <AccordionHeader className="border-b-0 p-3">
              
              <Typography color="blue-gray" className="mr-auto font-normal">
              <Link className="text-xl" to={'/sidePages/voucher'}>Voucher</Link>
              </Typography>
            </AccordionHeader>
          </ListItem>
        </Accordion>
      </List>
    </Card>
           
    </React.Fragment>
      <div className="lg:hidden">
        <SideBarDrawer></SideBarDrawer>
    </div>
    </>
    );
  };
  export default Sidebar

 