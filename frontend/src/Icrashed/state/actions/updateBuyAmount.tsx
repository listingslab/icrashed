import {AppThunk} from "../store"
import { 
  notify,
  setKey,
} from "../../";

export const updateBuyAmount = (
    amount: number,
): AppThunk => async (dispatch) => {
  try {
    // console.log("updateBuyAmount", amount)
    dispatch(setKey({ key: 'buyAmount', value: amount}));   
  } catch (error: any) {
    dispatch(notify("warning", "Failed to update buyAmount :("))
  }
};
