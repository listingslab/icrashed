import axios from "axios"
import {AppThunk} from "../store"
import { 
  notify,
  updateSelectInstrument,
  
} from "../../";

export const fetchAutocomplete = (
    fragment: string
): AppThunk => async (dispatch) => {
  try {
    dispatch(updateSelectInstrument("fetching", true));
    const baseUrl = "http://localhost:4000/"
    const ep = `${baseUrl}autocomplete?fragment=${fragment}`
    axios.get(ep)
      .then(function (response) {
        const list = response.data.response.list
        dispatch(updateSelectInstrument("autocomplete", list || []));
      })
      .catch(function (e) {
        dispatch(notify("warning", "Failed to fetch Autocomplete :("))
      })
      .finally(function () {
        dispatch(updateSelectInstrument("fetching", false));
        dispatch(updateSelectInstrument("fetched", true));
      })
  } catch (error: any) {
  }
};

