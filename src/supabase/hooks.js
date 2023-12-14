import { useState, useEffect } from 'react';
import SupaBaseServer from './server';

export const useWishServer = (...args) => {

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

        fetchData();
    }, []);

    return { data, loading, error };
};

export default useWishServer;
