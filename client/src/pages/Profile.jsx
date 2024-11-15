import { useSelector } from "react-redux";
import FormInfoAdmin from "../components/Profile/FormInfoAdmin";
import HeaderProfile from "../components/Profile/HeaderProfile";
import SideBar from "../components/Profile/SideBar";
import FormInfoOwner from "../components/Profile/FormInfoOwner";
import FormInfoWalker from "../components/Profile/FormInfoWalker";


export default function Profile() {

    const profile = useSelector(state => state.users.profile);
    console.log(profile);


    const rolFound = () => {
        if (profile.role === "Administrador") return <FormInfoAdmin />;
        if (profile.role === "Duenio") return <FormInfoOwner />;
        if (profile.role === "Paseador") return <FormInfoWalker />;
    }

    return (
        <div>
            <div className="flex">
                <div>
                    <SideBar />
                </div>
                <div className="w-full">
                    <HeaderProfile />
                    {
                        rolFound()
                    }
                </div>

            </div>
        </div>
    )
}
