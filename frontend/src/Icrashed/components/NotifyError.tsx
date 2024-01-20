import React from 'react'
import { Font, Icon } from '../theme'
import { Alert, Dialog, IconButton } from '@mui/material'
import {
  useSelectI, 
  useDispatchI, 
  selectInstrumental,
  navigate,
} from "../"

const ErrorMessage: React.FC = () => {
  const dispatch = useDispatchI()
  const instrumental = useSelectI(selectInstrumental)
  const {error} = instrumental
  if(!error) return null
  const {
    severity,
    // message,
  } = error
  return (
    <>
      <Dialog open maxWidth="sm">
        <Alert 
          variant="outlined" 
          severity={severity}
          action={<>
            <IconButton
              color="error"
              onClick={() => {
                dispatch(navigate("http://localhost:4000/ping", "_blank"))
              }}>
              <Icon icon="link" />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => {
                dispatch(navigate("/", "_self"))
              }}>
              <Icon icon="reset" />
            </IconButton>
            </>
          }>
          <Font variant="title">
            Ping error 101. Check API
          </Font>
        </Alert>
      </Dialog>
    </>
  )
}

export default ErrorMessage
