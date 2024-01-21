import React from "react"
import {config} from "../config"
import {
    Container,
    CardHeader,
    CardContent,
    Avatar,
    IconButton,
} from "@mui/material"
import {
    Icon,
    Font,
    Wizard,
    Notify,
    useIcrashedDispatch,
    useIcrashedSelect,
    ping,
    selectIcrashed,
} from "../"

export function Appshell() {
    const dispatch = useIcrashedDispatch()
    const icrashed = useIcrashedSelect(selectIcrashed)
    const {
        siteTitle,
        siteDescription,
    } = config
    React.useEffect(() => {
        const {
          pinging,
          pinged,
        } = icrashed
        if (!pinging && !pinged) dispatch(ping())
      }, [dispatch, icrashed])

  return (<>
            <Notify />
            <Container maxWidth="sm">
                {/* <Card> */}
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
                                    alt={siteTitle}/>
                            </IconButton>
                        </>}
                        title={<Font variant="title">
                                    {siteTitle}
                                </Font>}
                        subheader={<Font>
                                    {siteDescription}
                                </Font>}

                        action={<IconButton
                                    onClick={() => {
                                        console.log("Lingua")
                                    }}>
                                    <Icon icon="lingua" />
                                </IconButton>}
                    />
                    <CardContent sx={{mx:2}}>
                        <Wizard />
                        {/* <pre>
                            {JSON.stringify(icrashed, null, 2)}
                        </pre> */}
                    </CardContent>
                
                {/* </Card> */}
            </Container>
          </>
  )
}
