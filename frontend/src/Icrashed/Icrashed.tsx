import React from "react"
import { Provider } from "react-redux"
import { store } from "./"
import {Theme} from "./theme"
import {
  Appshell,
} from "./"

export function Icrashed() {

  return (<>
      <Provider store={store}>
        <Theme>
          <Appshell />
        </Theme>
      </Provider>
    </>
  )
}
