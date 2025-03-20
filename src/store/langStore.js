import { makeAutoObservable } from "mobx";

class LangStore {
    lang = 'es'

    constructor() {
        makeAutoObservable(this);
    }

    setLang(value) {
        this.lang = value;
    }
}
export default new LangStore();
