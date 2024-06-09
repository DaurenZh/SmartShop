import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CardSaleCard.css";

const CardSaleCard = ({
  className = "",
  exclude,
  exclude1,
  propLeft,
  propTop,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const cardSaleCardStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const vectorIconStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const unionStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={`card-sale-card ${className}`} style={cardSaleCardStyle}>
      <div className="wrapper-image">
        <img className="image-icon" loading="lazy" alt="" src="/image.svg" />
      </div>
      <div className="content">
        <div className="description-auto-layout">
          <p className="canopoly-duis-voluptate-container">
            <span className="canopoly-duis-voluptate">
              Canopoly duis voluptate
            </span>
            <span className="dolor-sunt-sit">
              dolor sunt sit adipisicing in
            </span>
          </p>
          <div className="price-icon">
            <div className="price1">
              <b className="currency-symbols">$39.27</b>
              <b className="price-values">$10.42</b>
            </div>
            <div className="icons-wrapper">
              <div className="icons">
                <img className="icon-heart" alt="" src="/icon--heart.svg" />
                <div className="icon-basket">
                  <img
                    className="icon-basket-child"
                    alt=""
                    src="/vector-19.svg"
                    style={vectorIconStyle}
                  />
                  <div className="union-wrapper">
                    <div className="union" style={unionStyle}>
                      <img className="exclude-icon" alt="" src={exclude} />
                      <img className="exclude-icon1" alt="" src={exclude1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardSaleCard.propTypes = {
  className: PropTypes.string,
  exclude: PropTypes.string,
  exclude1: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
};

export default CardSaleCard;
