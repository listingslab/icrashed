import {
    AlertColor,
} from "@mui/material"
import {
  setKey,
} from "../../"

export const notify = (
  severity: AlertColor, 
  message: string
) =>
  async (dispatch) => {
    try {
      dispatch(setKey({ key: "notification", value: {
          severity,
          message,  
      }}))
    } catch (e: any) {
      dispatch(notify(
        "error", 
        `notify ${e.toString()}`
      ))
  }
}
