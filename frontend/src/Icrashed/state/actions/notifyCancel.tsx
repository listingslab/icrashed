import {
  notify,             
  setKey,
} from "../../"

export const notifyCancel = (): any =>
  async (dispatch: any) => {
    try {
      dispatch(setKey({ key: "notification", value: null}))
    } catch (e: any) {
      dispatch(notify(
        "error", 
        `notifyCancel ${e.toString()}`
      ))
  }
}
