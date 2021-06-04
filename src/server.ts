import axios from "axios";

const axiosInstance = axios.create ({
  baseURL: "https://rest.coinapi.io/v1",
  headers: {"X-CoinAPI-Key": "BD615AB0-1DC3-487C-A83B-F1EFF1993C5E"}
})

export { axiosInstance };