import { makeAutoObservable } from "mobx";

class ModalStore {
  isOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  openModal = () => {
    this.isOpen = true;
  };

  closeModal = () => {
    this.isOpen = false;
  };

  toggleModal = () => {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.openModal();
    } else {
      this.closeModal();
    }
  };
}

export const modalStore = new ModalStore();
