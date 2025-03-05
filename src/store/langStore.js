import { makeAutoObservable } from "mobx";

class LangStore {
    lang = 'en'

    constructor() {
        makeAutoObservable(this);
    }

    setLang(value) {
        this.lang = value;
    }
}
export default new LangStore();
