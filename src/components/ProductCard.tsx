import type { Product } from "../types/Product"
import ImageWithFallback from "./ImageWithFallback";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import type { AppDispatch } from "../redux/store";

  interface Props {
    product: Product;
  }


export default function ProductCard({ product }: Props) {
    const dispatch = useDispatch<AppDispatch>();


    return (
      <div className="col-md-4 col-lg-3 mb-4">
        <div className="card h-100">
          <ImageWithFallback src={product.image} alt={product.title} />
          <div className="card-body d-flex flex-column">
            <h6 className="card-title text-truncate">{product.title}</h6>
            <p className="text-muted small mb-1">{product.category}</p>
            <p className="fw-bold mb-2"> ${product.price.toFixed(2)}</p>
            <p className="text-secondary small flex-grow-1">
              {product.description}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="badge bg-warning text-dark">
                ⭐ {product.rating.rate.toFixed(1)}
                </span>
                <button
                    className="btn btn-sm btn-primary"
                    onClick={() => dispatch(addToCart(product))}
                    >
                        Add to Cart 
                    </button>
            </div>
          </div>
        </div>
      </div>
    );
}