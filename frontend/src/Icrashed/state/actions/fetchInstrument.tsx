import axios from "axios"
import {AppThunk} from "../store"
import { 
  notify,
  updateInstrument,
} from "../../";

export const fetchInstrument = (
    instrument: string,
): AppThunk => async (dispatch) => {
  try {
    dispatch(updateInstrument("symbol", instrument));
    dispatch(updateInstrument("fetching", true));
    const baseUrl = "http://localhost:4000/"
    const ep = `${baseUrl}instruments?instrument=${instrument}`
    axios.get(ep)
      .then(function (response) {
        const instrument = response.data.response.instrument
        dispatch(updateInstrument("data", instrument));
      })
      .catch(function (e) {
        dispatch(notify("warning", "Failed to fetch instrument :("))
      })
      .finally(function () {
        dispatch(updateInstrument("fetching", false));
        dispatch(updateInstrument("fetched", true));
      })
  } catch (error: any) {
  }
};

