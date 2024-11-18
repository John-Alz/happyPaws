import { useSelector } from "react-redux";
import FormInfoAdmin from "../components/Dashboard/FormInfoAdmin";
import HeaderProfile from "../components/Dashboard/HeaderProfile";
import SideBar from "../components/Dashboard/SideBar";
import FormInfoOwner from "../components/Dashboard/FormInfoOwner";
import FormInfoWalker from "../components/Dashboard/FormInfoWalker";
import UserList from "../components/Dashboard/UserList";
import Users from "./Users";


export default function Profile() {

    const profile = useSelector(state => state.users.profile);
    console.log(profile);




    return (
        <div>
            <div className="flex">
                <div>
                    <SideBar />
                </div>
                <div className="w-full">
                    <HeaderProfile />
                    <Users />
                    {
                        rolFound()
                    }
                </div>

            </div>
        </div>
    )
}
