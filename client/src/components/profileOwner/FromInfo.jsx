import { useSelector } from "react-redux";


export default function FromInfo() {

    const profile = useSelector(state => state.users.profile)
    console.log(profile);

    return (
        <div>

        </div>
    )
}
