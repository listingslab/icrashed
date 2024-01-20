import axios from "axios"
import {store, AppThunk} from "../store"
import { 
  // notify,
  setKey,
} from "../../"

export const ping = (): AppThunk => async (dispatch) => {
  try {
    const {icrashed} = store.getState()
    const {pinging, pinged} = icrashed
    
    if (!pinging && !pinged){
      dispatch(setKey({ key: 'pinging', value: true}))
      const ep = `${process.env.REACT_APP_2ND_API}icrashed/ping`
      axios.get(ep)
        .then(function (response) {
          const r = response.data.response
          dispatch(setKey({ key: 'pingResponse', value: r}))

          const {code} = r
          if (code !== "200"){
            dispatch(setKey({ key: 'error', value: {
              severity: "error",
              message: r.data.message,
              data: r.data,
            }}))
          }
        })
        .catch(function (e) {
          dispatch(setKey({ key: 'error', value: {
            severity: "error",
            message: `Ping error 101. Check API`,
          }} ))
        })
        .finally(function () {
          dispatch(setKey({ key: 'pinging', value: false}))
          dispatch(setKey({ key: 'pinged', value: true}))  
        })
    }
  } catch (error: any) {
    // dispatch(notify("warning", "Failed to ping the API :("))
  }
}

