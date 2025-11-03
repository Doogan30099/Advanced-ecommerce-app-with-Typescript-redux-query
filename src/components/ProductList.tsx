import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import CategorySelector from "./CategorySelector";

export interface Props {
    selectedCategory?: string;
}


export default function ProductList() {
    const [selectedCategory, setSelectedCategory ] = useState("");
    const { data: products, isLoading, error } = useProducts(selectedCategory);


    if (isLoading) return <p>Loading Products...</p>;
    if (error) return <p>Error loading products...</p>;


    return (
        <>
        <CategorySelector onSelectCategory={setSelectedCategory} />
        <div className="row">
            {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </>
    );
}
