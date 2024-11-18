import { useEffect, useState } from "react";
import { api } from "../services/apiServices";


export const useFetch = (url) => {

    let [data, setData] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            const data = await api.get(url);
            setData(data)
        }
        fetchData()
    }, [url]);

    return { data };
}