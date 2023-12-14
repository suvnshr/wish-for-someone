import LocalWishManager from '@/local-wish-manager/manager';
import { createClient } from '@supabase/supabase-js'


export default class SupaBaseServer {
    static instance = null;

    constructor() {
        if (!SupaBaseServer.instance) {
            SupaBaseServer.instance = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

        }

        this.supabase = SupaBaseServer.instance;

    }


    async getAWish(id) {

        let { data: wish, error } = await this.supabase
            .from('wishes')
            .select('*')
            .eq('id', id)

        return { data: wish?.length ? wish[0] : null, error }
    }


    async getAllWishes(sort = "id", limit = null) {

        let { data: wishes, error } = await this.supabase.from('wishes').select("*").order(sort, { ascending: false });


        if (limit) {
            ({ data: wishes, error } = this.supabase.from('wishes').select("*").order(sort, { ascending: false }).limit(limit))
        }

        return {
            data: wishes,
            error: error ? "Error occured while getting all wishes" : null
        }
    }


    async toggleAWish(id, operation = "like") {

        const localWishManager = new LocalWishManager();
        const { data: wish, error: fetchErr } = await this.getAWish(id);

        let likes = wish?.likes ?? null;

        if (fetchErr) {
            return { data: false, error: fetchErr }
        }

        if (operation === "like") {
            localWishManager.localLike(id);
            likes++;
        } else {
            localWishManager.localUnlike(id);
            likes--;
        }


        const { error: updateErr } = await this.supabase
            .from('wishes')
            .update({ likes })
            .eq('id', id);



        if (updateErr) {
            return { data: false, error: updateErr }
        }

        return {
            data: { ...wish, likes },

        }

    }

}