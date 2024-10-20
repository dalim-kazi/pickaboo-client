import React, { useState } from "react";
import {Drawer, Button,Typography,IconButton,List,ListItem,ListItemPrefix,
 AccordionHeader, Accordion, Checkbox, AccordionBody} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { HiMiniChevronDown } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
const SideBarDrawer = () => {
    const [open, setOpen] = React.useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    const [open2, setOpen2] =useState(1);
    const handleOpen = (value) => {
      setOpen2(open2 === value ? 0 : value);
    };
    return (
        <React.Fragment>
      <Button onClick={openDrawer} className="bg-orange-600 rounded-md shadow-none"><FaBars></FaBars></Button>
      <Drawer open={open} onClose={closeDrawer} placement="right">
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            Pickaboo
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
      <Accordion
        className="border-b-2 py-2"
          open={open2 === 1}
          icon={
            <HiMiniChevronDown
              strokeWidth={2.5}
              className={`mx-auto h-4 w-6 transition-transform ${open2 === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open2 === 1}>
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
          open={open2 === 2}
          icon={
            <HiMiniChevronDown
              strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${open2 === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0 " selected={open2 === 2}>
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
          open={open2 === 3}
          icon={
            <HiMiniChevronDown
              strokeWidth={2.5}
              className={`mx-auto h-4 w-6 transition-transform ${open2 === 3 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open2 === 3}>
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
          open={open2 === 4}
          icon={
            <HiMiniChevronDown
              strokeWidth={2.5}
              className={`mx-auto h-4 w-6 transition-transform ${open2 === 4 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open2 === 4}>
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
                 open={open2 === 5}
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
      </Drawer>
    </React.Fragment>
    );
 };
 
 export default SideBarDrawer;
