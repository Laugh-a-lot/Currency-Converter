import React, { useState, useEffect } from "react";
import "./Table.css";
import axios from "../axios";
import TR from "./TableRow";
import CurrencySelector from "./CurrencySelector";

function Table() {
  const [rates, setRates] = useState([]);

  const [amount, setAmount] = useState(1);

  const currencies = {
    EUR: 1.00,
    GBP: rates.GBP,
    USD: rates.USD,
    INR: rates.INR,
    CAD: rates.CAD,
    JPY: rates.JPY,
    CNY: rates.CNY,
    BRL: rates.BRL,
  };
  const [baseCurrency, setBase] = useState();

  const handleBaseCurrency = (e) => {
    setBase(currencies[e.target.value]);
  };
  const handleConversion = (event) => {
    event.preventDefault();
    setAmount(event.target[0].value > 0 ? event.target[0].value : 1  );
    setBase(currencies[event.target[1].value]);
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get();
      setRates(request.data.rates);
      setBase(request.data.rates.USD);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="container">
        <h2 className="text-center pb-2 mb-2">Currency Rate</h2>
        <div className="selectBase">
          <h4 className="spacing">Base Currency</h4>
          <CurrencySelector select={setBase} setbase={handleBaseCurrency} />
        </div>

        <div className="table-responsive">
          <table className="table table-dark table-hover bg-color">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Country Name</th>
                <th>Rate</th>
                <th>Currency</th>
              </tr>
            </thead>
            <tbody>
              <TR
                sno={1}
                country={"United States"}
                rate={((currencies["USD"] * amount) / baseCurrency).toFixed(2)}
                currency={"USD"}
              />
              <TR
                sno={2}
                country={"China"}
                rate={((rates.CNY * amount) / baseCurrency).toFixed(2)}
                currency={"CNY"}
              />
              <TR
                sno={3}
                country={"Japan"}
                rate={((rates.JPY * amount) / baseCurrency).toFixed(2)}
                currency={"JPY"}
              />
              <TR
                sno={4}
                country={"Germany"}
                rate={((currencies["EUR"] * amount) / baseCurrency).toFixed(2)}
                currency={"EUR"}
              />
              <TR
                sno={5}
                country={"India"}
                rate={((rates.INR * amount) / baseCurrency).toFixed(2)}
                currency={"INR"}
              />
              <TR
                sno={6}
                country={"United Kingdom"}
                rate={((rates.GBP * amount) / baseCurrency).toFixed(2)}
                currency={"GBP"}
              />
              <TR
                sno={7}
                country={"France"}
                rate={((currencies["EUR"] * amount) / baseCurrency).toFixed(2)}
                currency={"EUR"}
              />
              <TR
                sno={8}
                country={"Italy"}
                rate={((currencies["EUR"] * amount) / baseCurrency).toFixed(2)}
                currency={"EUR"}
              />
              <TR
                sno={9}
                country={"Brazil"}
                rate={((rates.BRL * amount) / baseCurrency).toFixed(2)}
                currency={"BRL"}
              />
              <TR
                sno={10}
                country={"Canada"}
                rate={((rates.CAD * amount) / baseCurrency).toFixed(2)}
                currency={"CAD"}
              />
            </tbody>
          </table>
        </div>
        <form action="" className="convert" onSubmit={handleConversion}>
          <h3>Enter an amount:</h3>
          <input
            className="form-control-s"
            type="text"
            placeholder="0"
            aria-label="amount"
          ></input>
          <h3>Enter the currency:</h3>
          <CurrencySelector />
          <button type="submit" className="btn btn-primary btn-pos btn-sm">
            Convert
          </button>
        </form>
      </div>
    </div>
  );
}

export default Table;
