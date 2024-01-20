import {
  notify,
} from "../../"

export const navigate = (
  url: string, 
  target: string
): any =>
  async (dispatch: any) => {
    try {
      setTimeout(() => {
        window.open(url, target)
      }, 180)
    } catch (e: any) {
      dispatch(notify("error", `navigate ${e.toString()}`))
    }
  }

