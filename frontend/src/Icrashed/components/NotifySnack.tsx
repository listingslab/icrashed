import * as React from 'react'
import {
  Snackbar,
  Alert,
} from "@mui/material"
import {
  useDispatchI,
  useSelectI,
  selectInstrumental,
  notifyCancel,
} from "../"

import {Font} from "../theme"

export default function NotifyerSnack() {
  const dispatch = useDispatchI()
  const instrumental = useSelectI(selectInstrumental)
  const {notification} = instrumental
  // console.log("notification", notification)
  if( !notification) return null
  let { severity, message } = notification;
  if ( typeof message !== "string") return null
  
  const closeSnackbar = () =>  {
    dispatch(notifyCancel())
  }

  return (
    <Snackbar
      open
      anchorOrigin={{ 
        vertical:"bottom", 
        horizontal:"center" 
      }}
      autoHideDuration={3500}
      onClose={ closeSnackbar }
    >
      <Alert 
        variant="filled"
        onClose={ closeSnackbar } 
        severity={ severity }>
          <Font color="white">{ message }</Font>
      </Alert>
    </Snackbar>
  )
}
