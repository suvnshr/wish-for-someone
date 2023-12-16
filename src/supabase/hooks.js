import { useState, useEffect, useContext } from 'react';
import SupaBaseServer from './server';
import { WishOpContext } from '@/context/WishOpContext';

export const useWishServer = (...args) => {

    const { fetchWishes, setFetchWishes } = useContext(WishOpContext)

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const supabase = new SupaBaseServer();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase.getAllWishes(...args);
                if (error) {
                    throw new Error(error);
                }
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        if (fetchWishes) fetchData();

    }, [fetchWishes]);


    useEffect(() => {
        if (data && fetchWishes) {
            setFetchWishes(false);
        }
    }, [data])

    return { data, loading, error };
};

export default useWishServer;
