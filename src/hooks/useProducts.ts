import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchCategories, fetchProductsByCategory } from "../context/api";
import type { Product } from "../types/Product";


export const useProducts = (selectedCategory?: string) => {
    return useQuery<Product[]>({
        queryKey: ["products", selectedCategory],
        queryFn: () => 
            selectedCategory ? fetchProductsByCategory(selectedCategory) : fetchProducts(),
    });
};



export const useCategories = () => {
    return useQuery<string[]>({
        queryKey: ["categories"],
        queryFn: fetchCategories,
    });
};