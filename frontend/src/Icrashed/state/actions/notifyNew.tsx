import {
    AlertColor,
} from "@mui/material"
import {
  setKey,
} from "../../"

export const notifyNew = (
  severity: AlertColor, 
  message: string
) =>
  async (dispatch: any) => {
    try {
      dispatch(setKey({ key: "notification", value: {
          severity,
          message,  
      }}))
    } catch (e: any) {
      console.warn(`notifyNew ${e.toString()}`)
  }
}
