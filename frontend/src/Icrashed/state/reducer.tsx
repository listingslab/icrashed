import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RootState} from "./store"
import {config} from "../config"
import {wizard} from "../wizard"
import {lingua} from "../lingua"
import {
  KeyValueShape,
} from "../types"

const initialState: any = {
  error: null,
  locale: config.defaultLocale,
  pinging: false,
  pinged: false,
  pingResponse: null,
  notification: null,
  wizard,
  lingua,
}

export const slice = createSlice({
  name: 'icrashed',
  initialState,
  reducers: {
    setKey: (state, action: PayloadAction<KeyValueShape>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state[key] = value
    },
  },
})

export const selectIcrashed = (state: RootState) => state.icrashed

export const { setKey } = slice.actions 
export default slice.reducer
