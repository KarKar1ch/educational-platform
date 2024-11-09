import { create } from "zustand";

type Modal = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

const useModal = create<Modal>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true}),
    close: () => set({ isOpen: false}),
}));

export default useModal