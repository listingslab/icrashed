import {AppThunk} from "../store"
import { 
  notify,
  updateInstrument,
  updateSelectInstrument
} from "../../";

export const selectCancel = (): AppThunk => async (dispatch) => {
  try {
    dispatch(updateInstrument("symbol", null));
    dispatch(updateInstrument("fetching", false));
    dispatch(updateInstrument("fetched", false));
    dispatch(updateInstrument("data", {}));
    dispatch(updateSelectInstrument("selectedSymbol", null));
  } catch (error: any) {
    dispatch(notify("warning", "Failed to select :("))
  }
};
