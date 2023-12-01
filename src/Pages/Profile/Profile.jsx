import {Card,CardHeader,CardBody,Typography} from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Profile = () => {
    const {user}=useContext(AuthContext)
    return (
        <>
           <Card className="w-96 mx-auto mt-20 shadow-none border-2">
      <CardHeader floated={false} className="h-80 shadow-none">
        <img src={user?.photoURL} />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {user?.displayName}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
            { user?.email}
        </Typography>
      </CardBody>
    </Card>  
        </>
    );
};

export default Profile;