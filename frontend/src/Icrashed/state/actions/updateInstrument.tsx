import {store, AppThunk} from "../store"
import { 
  notify,
  setKey,
} from "../../";

export const updateInstrument = (
    key: string,
    value: any
): AppThunk => async (dispatch) => {
  try {
    const {instrument} = store.getState().instrumental
    dispatch(setKey({ key: 'instrument', value: {
      ...instrument,
      [key]: value,
    }}));
   
  } catch (error: any) {
    dispatch(notify("warning", "Failed to update Instrument Key :("))
  }
};

