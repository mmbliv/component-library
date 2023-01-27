import "./productOverlay.css";
import cart from "./assets/cart.png";
import heart from "./assets/heart.png";
import activeHeart from "./assets/activeheart.png";
import activeCart from "./assets/activecart.png";

interface OverlayProps {
  active?: boolean;
}

export const ProductOverlay = ({ active }: OverlayProps) => {
  return (
    <div className="product-overlay">
      <img src={active ? activeCart : cart} alt="cart" />
      <img src={active ? activeHeart : heart} alt="heart" />
    </div>
  );
};
