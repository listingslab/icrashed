import axios from "axios"
import {AppThunk} from "../store"
import { 
  // notify,
  updatePortfolioKey,
} from "../../";

export const fetchPortfolio = (): AppThunk => async (dispatch) => {
  try {
    dispatch(updatePortfolioKey("fetchingPortfolio", true));
    const baseUrl = "http://localhost:4000/"
    const ep = `${baseUrl}portfolio`
    axios.get(ep)
      .then(function (response) {
        const data = response.data.response
        dispatch(updatePortfolioKey("data", data));
      })
      .catch(function (e) {
        // dispatch(notify("warning", "Failed to fetchPortfolio :("))
      })
      .finally(function () {
        dispatch(updatePortfolioKey("fetchingPortfolio", false));
        dispatch(updatePortfolioKey("fetchedPortfolio", true));
      })
  } catch (error: any) {
    // dispatch(notify("warning", "Failed to fetchPortfolio :("))
  }
};

