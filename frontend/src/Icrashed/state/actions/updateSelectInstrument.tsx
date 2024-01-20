import {store, AppThunk} from "../store"
import { 
  notify,
  setKey,
} from "../../";

export const updateSelectInstrument = (
    key: string,
    value: any
): AppThunk => async (dispatch) => {
  try {
    const {selectInstrument} = store.getState().instrumental
    dispatch(setKey({ key: 'selectInstrument', value: {
      ...selectInstrument,
      [key]: value,
    }}));
   
  } catch (error: any) {
    dispatch(notify("warning", "Failed to update SelectInstrument Key :("))
  }
};

