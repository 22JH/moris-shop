import { create } from "zustand";
import type { ObjectId } from "mongoose";
import type { WishListType } from "@/app/types/UserType";

interface WishListStoreType {
  selectedItems: ObjectId[];
  setSelectedItems: (items: ObjectId[]) => void;
}

const useWishListStore = create<WishListStoreType>((set) => ({
  selectedItems: [],
  setSelectedItems: (selectedItems) => set(() => ({ selectedItems })),
}));

export default useWishListStore;
