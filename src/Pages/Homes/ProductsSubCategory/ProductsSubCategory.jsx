import  { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import UseProducts from "../../../Hook/UseProducts/UseProducts";
import SwiperCard from "../../../component/SwiperCard/SwiperCard";
 

const ProductsSubCategory = () => {
    const [activeTab, setActiveTab] = useState('casual');
    const [AllProducts,isLoading] = UseProducts()
  const casual = AllProducts.filter(item => item.subCategory === 'casual')
  const SandalFlat = AllProducts.filter(item => item.subCategory === 'ladies-closed-shoes')
  const sandals = AllProducts.filter(item => item.subCategory === 'sandals')
  const FormalShoe = AllProducts.filter(item => item.subCategory === 'Formal Shoe')
  const Accessories = AllProducts.filter(item => item.category=== 'Accessories') 
  const data = [
    {
      label: "Casual",
      value: "casual",
      desc: casual,
    },
    {
      label: "Sandal Flat",
      value: "SandalFlat",
      desc: SandalFlat,
    },
    {
      label: "Sandals",
      value: "sandals",
      desc: sandals,
    },
    {
      label: "Formal Shoe",
      value: "FormalShoe",
      desc:  FormalShoe,
    },
    {
      label: "Accessories",
      value: "Accessories",
      desc: Accessories,
    }
     
  ];
  
    return (
      <>
        <p className="mt-10 text-2xl font-bold">JUST FOR PRODUCTS</p>
           <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none bg-transparent p-0 mt-5 md:w-1/2 mx-auto"
        indicatorProps={{
          className:
            "bg-transparent border-2 border-slate-300 hover:border-slate-400 shadow-none rounded-full",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            <SwiperCard details={desc} isLoading={isLoading}></SwiperCard>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
        </>
    );
 };
 
 export default ProductsSubCategory;