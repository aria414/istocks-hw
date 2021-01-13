import React from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  console.log("Dashboard component - ", props.stockdata);

  const stockLinks = props.stockdata.map((item, index) => {
    return (
      <Link to={`/stock/${item.symbol}`} key={index} price={item.lastPrice}>
        <h2>
          {item.name} {item.lastPrice}
        </h2>
      </Link>
    );
  });

  return (
    <div className="dashboard">
      <h1>Dashboard component page</h1>
      {stockLinks}
    </div>
  );
};

export default Dashboard;
