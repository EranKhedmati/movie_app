import { useState, useEffect } from "react";
import axios from "axios";

export function useGetApi(url) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getApi() {
            try {
                setLoading(true);
                const response = await axios.get(url)
                const data = await response.data;
                setData(data);
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false);
            }
        }
        getApi()
    }, [])

    return { data, loading, error };
}