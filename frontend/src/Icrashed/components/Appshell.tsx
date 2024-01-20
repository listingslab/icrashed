import React from "react"
import {config} from "../config"
import {
    Container,
    Card,
    CardHeader,
    CardContent,
    Avatar,
    IconButton,
} from "@mui/material"
import {
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
                <Card>
                    <CardHeader 
                        avatar={<>
                            <IconButton>
                                <Avatar
                                    sx={{
                                        height: 65,
                                        width: 65,
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
                    />
                    <CardContent>
                        <Wizard />
                        {/* <pre>
                            {JSON.stringify(icrashed, null, 2)}
                        </pre> */}
                    </CardContent>
                
                </Card>
            </Container>
          </>
  )
}
