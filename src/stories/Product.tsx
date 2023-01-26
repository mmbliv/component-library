import "./product.css";
import { Button } from "./Button";
import hot from "./assets/hot.png";
interface ProductProps {
  type: "block" | "inline";
  img?: string;
  overlay?: boolean;
  name?: string;
  price?: number;
  starImg?: string;
  activeStartNumber?: number;
  inactiveStart?: number;
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
  name = "computer",
  price = 1000,
  overlay,
  activeStartNumber = 3,
  inactiveStart = 2,
  oldPrice = 800,
  border,
  background,
  row,
  column,
  iconActive,
}: ProductProps) => {
  const renderStar = () => {
    const starts = [];
    for (let i = 0; i < activeStartNumber; i++) {
      starts.push(
        <img
          src="/starActive.png"
          alt="star"
          className={type === "inline" ? "small-star" : ""}
        />
      );
    }
    for (let i = 0; i < inactiveStart; i++) {
      starts.push(
        <img
          src="/startInactive.png"
          alt="star"
          className={type === "inline" ? "small-star" : ""}
        />
      );
    }
    return starts;
  };

  if (type === "block")
    return (
      <div
        className={[
          "product-block--column",
          `${row && "product-block--row"}`,
          `${border && "product-block--border"}`,
          `${background && "product-block--background"}`,
        ].join(" ")}
      >
        <div className="product-block--img-container">
          <img src={img} alt="" className="product-block--img" />
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
        <div className="product-block--content-container">
          {column && <div className="line"></div>}
          <p className="product-block--name">{name}</p>
          <div className="product-block--stars">{renderStar()}</div>
          <p className="product--price">
            ${price} <span className="product--old-price">${oldPrice}</span>
          </p>
        </div>
      </div>
    );
  return (
    <div className="product-inline">
      <div className="product-inline--img-container">
        <img src={img} alt="img" className="product-inline--img" />
        <img src={hot} alt="hot" className="badge--hot" />
      </div>
      <div className="product-inline--content">
        <p className="product--name">{name}</p>
        <div className="product-inline--review-container">
          <div>{renderStar()}</div>
          <span className="product-inline--review">0 review</span>
          <a href="" className="product-inline--submit-review">
            Submit a review
          </a>
        </div>
        <p className="product--price">
          ${price} <span className="product--old-price">${oldPrice}</span>
        </p>
        <p className="product-inline--description">
          Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et
          mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc
          leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl
          ut dolor ...
        </p>
        <div className="product-inline--btns">
          <Button hasIcon icon="cart" label="Add To Cart" size="small" />
          <Button hasIcon icon="heart" size="small" />
        </div>
      </div>
    </div>
  );
};
