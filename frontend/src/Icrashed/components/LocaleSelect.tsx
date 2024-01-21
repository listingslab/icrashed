import React from "react"
import {
    Box,
    IconButton,
    Avatar,
    Tooltip,
} from "@mui/material"
import {
    // Icon,
    // Font,
    useIcrashedDispatch,
    useIcrashedSelect,
    selectIcrashed,
    selectLocale,
} from "../"

export function LocaleSelect() {
    const dispatch = useIcrashedDispatch()
    const icrashed = useIcrashedSelect(selectIcrashed)

    // console.log("locale", locale)

    React.useEffect(() => {
    }, [dispatch, icrashed])

  return (<>
                <Box>
                    <Tooltip title="German">
                        <IconButton
                            onClick={() => {
                                dispatch(selectLocale("de"))
                            }}>
                            <Avatar 
                                sx={{
                                    width: 24,
                                    height: 24,
                                }}
                                src="/svg/flags/de.svg"/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="English">
                        <IconButton
                            onClick={() => {
                                dispatch(selectLocale("en"))
                            }}>
                            <Avatar 
                                sx={{
                                    width: 24,
                                    height: 24,
                                }}
                                src="/svg/flags/en.svg"/>
                        </IconButton>
                    </Tooltip>
                </Box>
          </>
  )
}
