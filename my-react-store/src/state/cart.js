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
        })),

    addProductToCart: (product) =>
        set((state)=>({
            cart: [...state.cart, product]

        }))

}))

export default useStore;
