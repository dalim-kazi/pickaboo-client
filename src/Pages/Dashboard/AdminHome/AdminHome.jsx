import { useQuery } from "react-query";
import UseAxiosSecure from "../../../component/AxiosInterceptors/UseAxiosSecure";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const AdminHome = () => {
    const [axiosSecure] = UseAxiosSecure()
    const [nikeBrand, setNikeBrand] = useState([])
    const [bateBrand, setBateBrand] = useState([])
    const [powerBrand, setPowerBrand] = useState([])
    const [bate3DBrand, setBate3DBrand] = useState([])
    const [BateRedLabelBrand, setBateRedLabelBrand] = useState([])
    const [northStarBrand, setNorthStarBrand] = useState([])
    const [adidasBrand,setAdidasBrand]=useState([])
    const { data: allDetails=[], } = useQuery({
        queryKey: ['admin-state'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-state')
            return res.data
        }
    })
    useEffect(() => {
        const bookingDetails = allDetails?.paymentsProducts?.filter(items => items)
        bookingDetails?.map(items => {
        const all = items.products 
        const Nike = all?.filter(item => item.brand==='Nike')
           setNikeBrand((prevNikeBrand) => [...prevNikeBrand, ...Nike]);
            const bata = all?.filter(item => item.brand === 'bata')
            setBateBrand((prevBateBrand) => [...prevBateBrand, ...bata]);
            const power = all?.filter(item => item.brand === 'power')
            setPowerBrand((prevBateBrand) => [...prevBateBrand, ...power])
            const Bate3D = all?.filter(item => item.brand === 'Bate-3D')
            setBate3DBrand((prevBateBrand) => [...prevBateBrand, ...Bate3D])
            const BateRedLabel = all?.filter(item => item.brand === 'Bate-Red-Label')
            setBateRedLabelBrand((prevBateBrand) => [...prevBateBrand, ...BateRedLabel])
            const northStar = all?.filter(item => item.brand === 'north-star')
            setNorthStarBrand((prevBateBrand) => [...prevBateBrand, ...northStar])
            const adidas = all?.filter(item => item.brand === 'Adidas')
            setAdidasBrand((prevBateBrand) => [...prevBateBrand, ...adidas])
     });
   },[allDetails])
    const batePrice = bateBrand?.reduce((sum, currentValue) => sum + currentValue.subtotal, 0)
    const bate3DBrandPrice = bate3DBrand?.reduce((sum, currentValue) => sum + currentValue.subtotal, 0)
    const nikeBrandPrice = nikeBrand?.reduce((sum, currentValue) => sum + currentValue.subtotal, 0)
    const BateRedLabelBrandPrice = BateRedLabelBrand?.reduce((sum, currentValue) => sum + currentValue.subtotal, 0)
    const adidasBrandPrice = adidasBrand?.reduce((sum, currentValue) => sum + currentValue.subtotal, 0)
    const northStarBrandPrice = northStarBrand?.reduce((sum, currentValue) => sum + currentValue.subtotal, 0)
    const powerBrandPrice = powerBrand?.reduce((sum, currentValue) => sum + currentValue.subtotal, 0)
   const Data = [
    {
        category:'bate',
        count: bateBrand?.length,
        totalPrice:batePrice
    },
    {
        category:'Bate-3D',
        count: bate3DBrand?.length,
        totalPrice:bate3DBrandPrice
    },
    {
        category:'Bate-Red-Label',
        count: BateRedLabelBrand?.length,
        totalPrice:BateRedLabelBrandPrice
    },
    {
        category:'Adidas',
        count: adidasBrand?.length,
        totalPrice:adidasBrandPrice
    },
    {
        category:'Nike',
        count: nikeBrand?.length,
        totalPrice:nikeBrandPrice
       },
       {
        category:'North-Star',
        count: northStarBrand?.length,
        totalPrice:northStarBrandPrice
       },
       {
        category:'Power',
        count: powerBrand?.length,
        totalPrice:powerBrandPrice
      },
    ]
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
    
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
      
      
      
    return (
        <div className="overflow-scroll lg:overflow-hidden mb-10">
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 mx-10 xl:mx-auto items-center text-center mt-5 gap-5">
                <div className="w-full bg-gradient-to-r from-blue-400 via-green-500 to-orange-500 text-white p-5 rounded-md">
                    <p className="text-lg">Total Products</p>
                    <p className="text-2xl font-extrabold">{allDetails?.products}</p>
                </div>
                <div className="bg-gradient-to-r from-green-500 via-pink-500 to-yellow-300 p-5 text-white rounded-md">
                    <p className="text-lg">Total Users</p>
                    <p className="text-2xl font-extrabold">{allDetails?.totalUser }</p>
                </div>
                <div className=" bg-gradient-to-r from-green-500 via-orange-400 to-lime-500 p-5 text-white rounded-md">
                    <p className="text-lg">Total Bookings</p>
                    <p className="text-2xl font-extrabold">{allDetails?.totalBooking}</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500 via-pink-400 to-lime-500 p-5 text-white rounded-md">
                    <p className="text-lg">Total Payments</p>
                    <p className="text-2xl font-extrabold"><span className="text-[1.9rem]">৳</span>{allDetails?.totalPayment}</p>
                </div>
                <div className="w-full bg-gradient-to-r from-blue-400 via-green-500 to-orange-500 text-white p-5 rounded-md">
                    <p className="text-lg">Total Reviews</p>
                    <p className="text-2xl font-extrabold">{allDetails?.totalReview}</p>
                </div>
            </div>  
            <div className="grid lg:grid-cols-3 mt-20 items-center lg:gap-20">
                <div className="col-span-2">
            <BarChart
              className="w-4/6"
      width={810}
      height={400}
      data={Data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="totalPrice" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {Data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
                </div>
                <div className="col-span-1">
                <PieChart width={400} height={400}>
          <Pie
                            data={Data}
                            className="mx-auto"
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="count"
          >
            {Data?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;