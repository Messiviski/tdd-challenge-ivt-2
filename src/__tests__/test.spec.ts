import { ApiCrypto } from "../ApiCrypto"
import nock from "nock";

const apiCrypto = new ApiCrypto();

describe("ApiCrypto Tests", () => {
  describe("getSymbols Tests", () => {
    it("should be able to return the symbols when the status code of the resquest is 200", async () => {
      nock("https://rest.coinapi.io", {
        reqheaders: {
          "X-CoinAPI-Key": "BD615AB0-1DC3-487C-A83B-F1EFF1993C5E"
        }
      })
        .get("/v1/symbols")
        .reply(200, "Success")

      await expect(apiCrypto.getSymbols()).resolves.toBeDefined();
    })

    it("should be able to return throw an error when the status code of the request is 404", async () => {
      nock("https://rest.coinapi.io", {
        reqheaders: {
          "X-CoinAPI-Key": "BD615AB0-1DC3-487C-A83B-F1EFF1993C5E"
        }
      })
        .get("/v1/symbols")
        .reply(404)
  
      await expect(apiCrypto.getSymbols()).rejects.toThrow(Error);
    })

    it("should be able to return throw an error when the status code of the request is 500", async () => {
      nock("https://rest.coinapi.io", {
        reqheaders: {
          "X-CoinAPI-Key": "BD615AB0-1DC3-487C-A83B-F1EFF1993C5E"
        }
      })
        .get("/v1/symbols")
        .reply(500)
  
      await expect(apiCrypto.getSymbols()).rejects.toThrow(Error);
    })
  })

  describe("getExchanges Tests", () => {
    it("should be able to return the exchanges when the status code of the resquest is 200", async () => {
      nock("https://rest.coinapi.io", {
        reqheaders: {
          "X-CoinAPI-Key": "BD615AB0-1DC3-487C-A83B-F1EFF1993C5E"
        }
      })
        .get("/v1/exchanges")
        .reply(200, "Success")

      await expect(apiCrypto.getExchanges()).resolves.toBeDefined();
    })

    it("should be able to return throw an error when the status code of the request is 404", async () => {
      nock("https://rest.coinapi.io", {
        reqheaders: {
          "X-CoinAPI-Key": "BD615AB0-1DC3-487C-A83B-F1EFF1993C5E"
        }
      })
        .get("/v1/exchanges")
        .reply(404)
  
      await expect(apiCrypto.getExchanges()).rejects.toThrow(Error);
    })

    it("should be able to return throw an error when the status code of the request is 500", async () => {
      nock("https://rest.coinapi.io", {
        reqheaders: {
          "X-CoinAPI-Key": "BD615AB0-1DC3-487C-A83B-F1EFF1993C5E"
        }
      })
        .get("/v1/exchanges")
        .reply(500)
  
      await expect(apiCrypto.getExchanges()).rejects.toThrow(Error);
    })
  })

  describe("getHistoricalQuotes Tests", () => {
    it("should be able to return the historical quotes when the status code of the resquest is 200", async () => {
      nock("https://rest.coinapi.io", {
        reqheaders: {
          "X-CoinAPI-Key": "BD615AB0-1DC3-487C-A83B-F1EFF1993C5E"
        }
      })
        .get("/v1/quotes/BITSTAMP_SPOT_BTC_USD/history?time_start=2016-01-01T00:00:00")
        .reply(200, "Success")

      await expect(apiCrypto.getHistoricalQuotes()).resolves.toBeDefined();
    })

    it("should be able to return throw an error when the status code of the request is 404", async () => {
      nock("https://rest.coinapi.io", {
        reqheaders: {
          "X-CoinAPI-Key": "BD615AB0-1DC3-487C-A83B-F1EFF1993C5E"
        }
      })
        .get("/v1/quotes/BITSTAMP_SPOT_BTC_USD/history?time_start=2016-01-01T00:00:00")
        .reply(404)
  
      await expect(apiCrypto.getHistoricalQuotes()).rejects.toThrow(Error);
    })

    it("should be able to return throw an error when the status code of the request is 500", async () => {
      nock("https://rest.coinapi.io", {
        reqheaders: {
          "X-CoinAPI-Key": "BD615AB0-1DC3-487C-A83B-F1EFF1993C5E"
        }
      })
        .get("/v1/quotes/BITSTAMP_SPOT_BTC_USD/history?time_start=2016-01-01T00:00:00")
        .reply(500)
  
      await expect(apiCrypto.getHistoricalQuotes()).rejects.toThrow(Error);
    })
  })
})