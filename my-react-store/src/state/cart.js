import { create } from "zustand"

const useStore = create((set) => ({
    user: {
        name: "cole",
        cohort: "68",

    },

    cart: [],

    clearCart: () =>
        set(() => ({
            cart: []    
        }))

}))

export default useStore;
