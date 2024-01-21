import {
  notifyNew,             
  setKey,
} from "../../"

export const selectLocale = (
    locale: string,
): any =>
  async (dispatch: any) => {
    try {
      dispatch(setKey({ key: "locale", value: locale }))
    } catch (e: any) {
      dispatch(notifyNew(
        "error", 
        `selectLocale ${e.toString()}`
      ))
  }
}
