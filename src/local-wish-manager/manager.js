export default class LocalWishManager {
    getLocalLikes() {
        return JSON.parse(localStorage.getItem("likes")) ?? {};
    }

    setLocalLikes(localLikes) {
        localStorage.setItem("likes", JSON.stringify(localLikes));
    }

    userHasLiked(id) {
        return Boolean(this.getLocalLikes()[id])
    }

    localLike(id) {
        const allLocalLikes = this.getLocalLikes();
        allLocalLikes[id] = 1;
        this.setLocalLikes(allLocalLikes);
    }

    localUnlike(id) {
        const allLocalLikes = this.getLocalLikes();
        allLocalLikes[id] = 0;

        this.setLocalLikes(allLocalLikes);

    }
}