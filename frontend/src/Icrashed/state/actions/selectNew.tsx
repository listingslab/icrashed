import {AppThunk} from "../store"
import { 
  notify,
  updateSelectInstrument,
  selectCancel,
} from "../../";

export const selectNew = (
    instrument: string|null,
): AppThunk => async (dispatch) => {
  try {
    dispatch(selectCancel())
    dispatch(updateSelectInstrument("selectedSymbol", instrument));
  } catch (error: any) {
    dispatch(notify("warning", "Failed to select :("))
  }
};

