import {
  notifyNew,             
  setKey,
} from "../../"

export const notifyCancel = (): any =>
  async (dispatch: any) => {
    try {
      dispatch(setKey({ key: "notification", value: null}))
    } catch (e: any) {
      dispatch(notifyNew(
        "error", 
        `notifyCancel ${e.toString()}`
      ))
  }
}
