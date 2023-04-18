import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sort, setSort] = useState("Alphabetically")
  const [filter, setFilter] = useState("Tech")
  
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(r => r.json())
    .then(stocks => setStocks(stocks))
  }, [])
  const addToPortfolio = (stock) => {
    if (!portfolio.includes(stock)) {
      setPortfolio([...portfolio, stock])
    }
  }
  const removeFromPortfolio = (stock) => {
    const newPortfolio = portfolio.filter((s) => s.id !== stock.id)
    setPortfolio(newPortfolio)
  }
  const sortedStocks = [...stocks]
  .sort((a, b) => {
    if (sort === "Alphabetically") {
      return a.name.localeCompare(b.name)
    } else {
      return  b.price - a.price
    }
  })
  .filter((stock) => stock.type === filter)

  return (
    <div>
      <SearchBar sort={sort} onSortChange={setSort} filter={filter} onFilterChange={setFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks= {sortedStocks} onStockClick= {addToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onPortfolioClick= {removeFromPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
