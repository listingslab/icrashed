import * as React from 'react'
import {
  Snackbar,
  Alert,
} from "@mui/material"
import {
  useIcrashedDispatch,
  useIcrashedSelect,
  selectIcrashed,
  notifyCancel,
} from "../"

import {Font} from "../theme"

export default function Notify() {
  const dispatch = useIcrashedDispatch()
  const icrashed = useIcrashedSelect(selectIcrashed)
  const {notification} = icrashed

  if( !notification) return null
  let { severity, message } = notification;
  if ( typeof message !== "string") return null
  
  const closeNotify = () =>  {
    dispatch(notifyCancel())
  }

  return (
    <Snackbar
      open
      anchorOrigin={{ 
        vertical:"bottom", 
        horizontal:"center" 
      }}
      autoHideDuration={4000}
      onClose={ closeNotify }
    >
      <Alert 
        variant="filled"
        onClose={ closeNotify } 
        severity={ severity }>
          <Font color="white">
            { message }
          </Font>
      </Alert>
    </Snackbar>
  )
}
