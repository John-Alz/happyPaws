import HeaderProfile from "../components/profileOwner/HeaderProfile";
import SideBar from "../components/profileOwner/SideBar";


export default function Profile() {
    return (
        <div>
            <div className="flex">
                <div>
                    <SideBar />
                </div>
                <div className="w-full">
                    <HeaderProfile />
                </div>
            </div>
        </div>
    )
}
