import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import Description from "./DESCRIPTION";
import TermsAndCondition from "./TERMSANDCONDITION";
import { useState } from "react";
 

const DetailTab = ({ products }) => {
  const [activeTab, setActiveTab] = useState(1)
 
    return (
        <Tabs value={activeTab}>
      <TabsHeader className="lg:w-1/2">
                <Tab onClick={()=>setActiveTab(1)}  value={1}>DESCRIPTION</Tab>
                <Tab onClick={()=>setActiveTab(2)} value={2}>TERMS AND CONDITION</Tab>
                <Tab onClick={()=>setActiveTab(3)} value={3}>SIZE CHART</Tab>
      </TabsHeader>
      <TabsBody>
        <TabPanel animate value={1}>
                  <Description products={products}></Description>      
        </TabPanel>
                <TabPanel animate value={2}>
                     <TermsAndCondition></TermsAndCondition>
                </TabPanel>
                <TabPanel animate value={3} className="w-5/6 mx-auto">
                    <img src="https://cdn.shopify.com/s/files/1/2287/9679/files/size-chart-new-2.jpg?v=1648103622" alt="" />
                </TabPanel>
      </TabsBody>
    </Tabs>
    );
};

export default DetailTab;