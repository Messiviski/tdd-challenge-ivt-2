import axios from "axios";

class ApiCrypto {

  constructor(){}

  async getSymbols() {
    try {
      const symbols = await axios.get("https://rest.coinapi.io/v1/symbols", {
        method: "GET",
        headers: {"X-CoinAPI-Key": "BD615AB0-1DC3-487C-A83B-F1EFF1993C5E"}
      }).then(response => {
        return response.data
      });

      return symbols;
    } catch (error) {
      throw new Error(`Something went wrong! Message: ${error.message}`);
    }
  }

  async getExchanges() {
    try {
      const exchanges = await axios.get("https://rest.coinapi.io/v1/exchanges", {
        method: "GET",
        headers: {"X-CoinAPI-Key": "BD615AB0-1DC3-487C-A83B-F1EFF1993C5E"}
      }).then(response => {
        return response.data
      });

      return exchanges;
    } catch (error) {
      throw new Error(`Something went wrong! Message: ${error.message}`);
    }
  }

  async getHistoricalQuotes() {
    try {
      const url = "https://rest.coinapi.io/v1/quotes/BITSTAMP_SPOT_BTC_USD/history?time_start=2016-01-01T00:00:00";

      const historicalQuotes = await axios.get(url, {
        method: "GET",
        headers: {"X-CoinAPI-Key": "BD615AB0-1DC3-487C-A83B-F1EFF1993C5E"}
      }).then(response => {
        return response.data
      });

      return historicalQuotes;
    } catch (error) {
      throw new Error(`Something went wrong! Message: ${error.message}`)
    }
  }

}

export { ApiCrypto };