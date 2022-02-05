import React from "react"
import MBUX from "assets/images/MBUX.jpg"
import EOW from "assets/images/EOW_Animation.gif"
import kurashiruStore from "assets/images/kurashiru_store_ui.png"
import { Box, Grid, Typography } from "@mui/material"
import MediaCard from "libs/components/molecules/MediaCard"
import Header from "libs/components/molecules/Header"

function App() {
  return (
    <>
      <Header />
      <Box m={2}>
        <Grid container alignItems="center" direction="column">
          <Box mb={2} style={{ width: "100%" }}>
            <Typography variant="h2">Wecken's Works</Typography>
          </Box>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            alignItems="flex-start "
          >
            <Grid item xs={12} sm={4} md={4}>
              <MediaCard
                imageSrc={kurashiruStore}
                title="kurashiru store"
                body="Online select shop for quality food and sweets in the biggest recipe video app in Japan 'kurashiru' (service ended in 2020)"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <MediaCard
                imageSrc={MBUX}
                title="MBUX - Mercedes-Benz User Experience"
                body="Futuristic and luxrious information system, designed to give the best user expericne in a car."
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <MediaCard
                imageSrc={EOW}
                title="Eijiro on the WEB"
                body="One of the most popular Japanese-English online dictionary in Japan."
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default App
