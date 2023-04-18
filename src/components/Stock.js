import React from "react";

function Stock({stock , handleStockClick }) {
  const { name, price, ticker } = stock;
  return (
    <div>
      <div className="card" onClick={()=>handleStockClick(stock)} >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
