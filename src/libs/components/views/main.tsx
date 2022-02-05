import React from "react"
import MBUX from "assets/images/MBUX.jpg"
import EOW from "assets/images/EOW_Animation.gif"
import kurashiruStore from "assets/images/kurashiru_store_ui.png"
import { Box, Grid, Typography } from "@mui/material"
import MediaCard from "libs/components/molecules/MediaCard"

function Main(): React.ReactElement {
  return (
    <Box m={2}>
      <Grid container alignItems="center" direction="column">
        <Box mb={2} style={{ width: "100%" }}>
          <Typography variant="h2">Wecken's Works</Typography>
        </Box>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          alignItems="flex-start"
          gap={3}
        >
          <Grid item xs={12} sm={3} md={3}>
            <MediaCard
              imageSrc={kurashiruStore}
              title="kurashiru store"
              body="Online select shop for quality food and sweets in the biggest recipe video app in Japan 'kurashiru' (service ended in 2020)"
              to="kurashiru_store"
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <MediaCard
              imageSrc={MBUX}
              title="MBUX - Mercedes-Benz User Experience"
              body="Futuristic and luxrious information system, designed to give the best user expericne in a car."
              to="/mbux"
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <MediaCard
              imageSrc={EOW}
              title="Eijiro on the WEB"
              body="One of the most popular Japanese-English online dictionary in Japan."
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Main
