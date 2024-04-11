import { create } from "zustand";
import type { ObjectId } from "mongoose";

interface WishListStoreType {
  selectedItems: ObjectId[];
  setSelectedItems: (items: ObjectId[]) => void;
}

const useWishListStore = create<WishListStoreType>((set) => ({
  selectedItems: [],
  setSelectedItems: (selectedItems) => set(() => ({ selectedItems })),
}));

export default useWishListStore;
