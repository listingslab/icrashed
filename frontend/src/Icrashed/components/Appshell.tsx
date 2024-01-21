import React from "react"
import {
    Container,
    CardHeader,
    CardContent,
    Avatar,
    IconButton,
} from "@mui/material"
import {
    // Icon,
    Font,
    Wizard,
    Notify,
    useIcrashedDispatch,
    useIcrashedSelect,
    ping,
    selectIcrashed,
    LocaleSelect,
} from "../"

export function Appshell() {
    const dispatch = useIcrashedDispatch()
    const icrashed = useIcrashedSelect(selectIcrashed)
    
    const {locale, lingua} = icrashed
    const title = lingua["ICRASHED"][locale]
    const subheader  = lingua["TAGLINE"][locale]

    React.useEffect(() => {
        const {
          pinging,
          pinged,
        } = icrashed
        if (!pinging && !pinged) dispatch(ping())
      }, [dispatch, icrashed])

  return (<>
            <Notify />
            <Container maxWidth="md">
                    <CardHeader 
                        avatar={<>
                            <IconButton
                                onClick={() => {
                                    console.log("Confirm reset")
                                }}>
                                <Avatar
                                    sx={{
                                        height: 48,
                                        width: 48,
                                    }} 
                                    src="/iOS.svg" 
                                    alt={"title"}/>
                            </IconButton>
                        </>}
                        title={<Font variant="title">
                                    {title}
                                </Font>}
                        subheader={<Font>
                                    {subheader}
                                </Font>}
                        action={<LocaleSelect />}
                    />
                    <CardContent sx={{mx:2}}>
                        <Wizard />
                    </CardContent>
            </Container>
          </>
  )
}

/* 
<pre>
    {JSON.stringify(icrashed, null, 2)}
</pre> 
*/