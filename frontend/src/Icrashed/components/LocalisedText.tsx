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

export function LocalisedText() {
    const dispatch = useIcrashedDispatch()
    const icrashed = useIcrashedSelect(selectIcrashed)
    const {locale, lingua} = icrashed
    // console.log("locale", locale)

    React.useEffect(() => {
    }, [dispatch, icrashed])

  return (<>
            Localised Text
          </>
  )
}
