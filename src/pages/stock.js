import React from "react";

const Stock = (props) => {
  // const stockDisplay = props.stockdata.map ( (item, index) => {
  //     return (
  //         <h3>{item.name} {item.symbol} {item.lastPrice} </h3>
  //     )
  // })
  console.log("Stock comp all props - ", props);

  //Make the API call to get info
  const symbol = props.match.params.symbol;
  const apiKey = "usekeyinvscode";
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;
  console.log("Symbol is: ", symbol);

  const [stock, setStock] = React.useState(null);
  const getStock = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStock(data);
  };

  React.useEffect(() => {
    getStock();
  }, []);

  console.log("Stock state is: ", stock);

  const loaded = () => {
    return (
      <div className="stockSection">
        <h2>Name: {stock[0].name}</h2>
        <h2>Symbol: {stock[0].symbol}</h2>
        <h2>Price: ${stock[0].price}</h2>
      </div>
    );
  };

  const loading = () => {
    return <h1>Page loading...</h1>;
  };

  const backToStock = () => {
    props.history.push("/stocks");
  };

  return (
    <div>
      <h1>Displaying Current Stock: </h1>
      {stock ? loaded() : loading()}
      <div onClick={backToStock} className="backBtn">
        Go Back
      </div>
    </div>
  );
};

export default Stock;
