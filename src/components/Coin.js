import React from "react";
import "./Coin.css";

const Coin = ({
  rank,
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <p1>{rank}. </p1>
          <img src={image} alt="crypto" width="50px" className="coin-image" />
          <div className="symbol-name">
            <p className="coin-symbol">{symbol.toUpperCase()}</p>
            <h1>{name}</h1>
          </div>
        </div>
        <div className="coin-data">
          <p className="coin-price"> Price: ${price}</p>
          {/* <p className="coin-volume">${volume.toLocaleString()}</p> */}
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
          {/* <p className="coin-marketcap">
            Mkt Cap: ${marketcap.toLocaleString()}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Coin;
