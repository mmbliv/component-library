import "./productOverlay.css";

interface OverlayProps {
  active?: boolean;
}

export const ProductOverlay = ({ active }: OverlayProps) => {
  return (
    <div className="product-overlay">
      <img src={active ? "/activecart.png" : "/cart.png"} alt="cart" />
      <img src={active ? "/activeheart.png" : "/heart.png"} alt="heart" />
    </div>
  );
};
