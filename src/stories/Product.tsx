import "./product.css";

interface ProductProps {
  type: "block" | "inline";
  img: string;
  overlay?: boolean;
  name: string;
  price: string;
  starImg: string;
  activeStartNumber: number;
  inactiveStart: number;
  oldPrice?: number;
  column?: boolean;
  row?: boolean;
  border?: boolean;
  background?: boolean;
  iconActive?: boolean;
}
export const Product = ({
  type,
  img,
  name,
  price,
  overlay,
  activeStartNumber,
  inactiveStart,
  oldPrice,
  border,
  background,
  row,
  column,
  iconActive,
}: ProductProps) => {
  const renderStar = () => {
    const starts = [];
    for (let i = 0; i < activeStartNumber; i++) {
      starts.push(<img src="/starActive.png" alt="star" />);
    }
    for (let i = 0; i < inactiveStart; i++) {
      starts.push(<img src="/startInactive.png" alt="star" />);
    }
    return starts;
  };

  if (type === "block")
    return (
      <div
        className={[
          "product-column",
          `${row && "product-row"}`,
          `${border && "border"}`,
          `${background && "background"}`,
        ].join(" ")}
      >
        <div className="img-container">
          <img src={img} alt="" className="product-img" />
          {overlay && (
            <div className="product-overlay">
              <img
                src={iconActive ? "/activecart.png" : "/cart.png"}
                alt="cart"
              />
              <img
                src={iconActive ? "/activeheart.png" : "/heart.png"}
                alt="heart"
              />
            </div>
          )}
        </div>
        <div className="content-container">
          {column && <div className="line"></div>}
          <p className="product-name">{name}</p>
          <div className="stars">{renderStar()}</div>
          <p className="product-price">
            ${price} <span className="old-price">${oldPrice}</span>
          </p>
        </div>
      </div>
    );
  return <div></div>;
};
