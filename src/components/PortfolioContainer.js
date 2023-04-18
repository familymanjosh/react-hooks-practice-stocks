import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, onPortfolioClick}) {
  const portfolioList = portfolio.map((stock) =>(
    <Stock
    key={stock.id}
    stock={stock}
    handleStockClick={onPortfolioClick}
    />
  ))
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioList}
    </div>
  );
}

export default PortfolioContainer;
