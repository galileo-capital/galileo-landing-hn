import { makeAutoObservable } from "mobx";

class LoadingStore {
    loading = true;

    constructor() {
        makeAutoObservable(this);
    }

    show() {
        this.loading = true;
    }
    hide() {
        this.loading = false;
    }
}
export default new LoadingStore();
