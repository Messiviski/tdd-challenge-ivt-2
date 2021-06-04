import { axiosInstance } from "./server";

class ApiCrypto {

  constructor(){}

  async getSymbols() {
    try {
      const symbols = await axiosInstance.get("/symbols");

      return symbols.data;
    } catch (error) {
      throw new Error(`Something went wrong! Message: ${error.message}`);
    }
  }

  async getExchanges() {
    try {
      const exchanges = await axiosInstance.get("/exchanges");

      return exchanges.data;
    } catch (error) {
      throw new Error(`Something went wrong! Message: ${error.message}`);
    }
  }

  async getHistoricalQuotes() {
    try {
      const getPath = "/quotes/BITSTAMP_SPOT_BTC_USD/history?time_start=2016-01-01T00:00:00";

      const historicalQuotes = await axiosInstance.get(getPath);

      return historicalQuotes.data;
    } catch (error) {
      throw new Error(`Something went wrong! Message: ${error.message}`)
    }
  }

}

export { ApiCrypto };