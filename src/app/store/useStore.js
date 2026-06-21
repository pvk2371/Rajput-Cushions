import { create } from "zustand";
export const useCartStore = create((set, get) => ({
  cart: [],
  addToCart: (product, color, quantity = 1) => {
    set((state) => {
      const existingIndex = state.cart.findIndex(
        (item) => item.product.id === product.id && item.selectedColor.hex === color.hex
      );
      if (existingIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingIndex].quantity += quantity;
        return { cart: updatedCart };
      } else {
        return { cart: [...state.cart, { product, selectedColor: color, quantity }] };
      }
    });
  },
  removeFromCart: (productId, colorHex) => {
    set((state) => ({
      cart: state.cart.filter(
        (item) => !(item.product.id === productId && item.selectedColor.hex === colorHex)
      )
    }));
  },
  updateQuantity: (productId, colorHex, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(productId, colorHex);
      return;
    }
    set((state) => ({
      cart: state.cart.map(
        (item) => item.product.id === productId && item.selectedColor.hex === colorHex ? { ...item, quantity } : item
      )
    }));
  },
  clearCart: () => set({ cart: [] }),
  getCartSubtotal: () => {
    const { cart } = get();
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  },
  getCartCount: () => {
    const { cart } = get();
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }
}));
export const useWishlistStore = create((set, get) => ({
  wishlist: [],
  addToWishlist: (product) => {
    set((state) => {
      if (state.wishlist.some((item) => item.id === product.id)) {
        return state;
      }
      return { wishlist: [...state.wishlist, product] };
    });
  },
  removeFromWishlist: (productId) => {
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== productId)
    }));
  },
  isInWishlist: (productId) => {
    return get().wishlist.some((item) => item.id === productId);
  },
  clearWishlist: () => set({ wishlist: [] })
}));
export const useCompareStore = create((set, get) => ({
  compareList: [],
  addToCompare: (product) => {
    const { compareList } = get();
    if (compareList.some((item) => item.id === product.id)) {
      return { success: false, message: "Product is already in the comparison list." };
    }
    if (compareList.length >= 3) {
      return { success: false, message: "You can compare a maximum of 3 products at a time." };
    }
    set({ compareList: [...compareList, product] });
    return { success: true, message: "Product added to comparison." };
  },
  removeFromCompare: (productId) => {
    set((state) => ({
      compareList: state.compareList.filter((item) => item.id !== productId)
    }));
  },
  isInCompare: (productId) => {
    return get().compareList.some((item) => item.id === productId);
  },
  clearCompare: () => set({ compareList: [] })
}));
export const useSearchStore = create((set) => ({
  isSearchOpen: false,
  searchQuery: "",
  setSearchOpen: (isOpen) => set({ isSearchOpen: isOpen }),
  setSearchQuery: (query) => set({ searchQuery: query })
}));
export const useMobileMenuStore = create((set) => ({
  isMobileMenuOpen: false,
  setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen })
}));
