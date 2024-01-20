import axios from "axios"
import {AppThunk} from "../store"
import { 
  notify,
  updatePortfolioKey,
  selectCancel,
} from "../../";

export const buy = (
    symbol: string,
    amount: number
): AppThunk => async (dispatch) => {
  try {
    dispatch(updatePortfolioKey("buying", true));    
    const baseUrl = "http://localhost:4000/"
    const ep = `${baseUrl}buy/?symbol=${symbol}&amount=${amount}`
    axios.post(ep, {symbol, amount})
      .then(function (response) {
        // const data = response.data.response
        dispatch(selectCancel());
        dispatch(updatePortfolioKey("fetchingPortfolio", false));
        dispatch(updatePortfolioKey("fetchedPortfolio", false));
        dispatch(updatePortfolioKey("data", null));
      })
      .catch(function (e) {
        dispatch(notify("warning", "Failed to buy :("))
      })
      .finally(function () {
        dispatch(updatePortfolioKey("buying", false));
        dispatch(updatePortfolioKey("bought", true));
      })
  } catch (error: any) {
    dispatch(notify("warning", "Failed to buy :("))
  }
};

