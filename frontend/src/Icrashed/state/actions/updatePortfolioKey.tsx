import {store, AppThunk} from "../store"
import { 
  notify,
  setKey,
} from "../../";

export const updatePortfolioKey = (
    key: string,
    value: any
): AppThunk => async (dispatch) => {
  try {
    const {portfolio} = store.getState().instrumental
    dispatch(setKey({ key: 'portfolio', value: {
      ...portfolio,
      [key]: value,
    }}));
   
  } catch (error: any) {
    dispatch(notify("warning", "Failed to updatePortfolioKey :("))
  }
};

