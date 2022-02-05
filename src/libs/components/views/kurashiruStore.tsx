import React from "react"
import { Typography } from "@mui/material"
import IntroduceWorkArticle from "../molecules/IntroduceWorkArticle"
import KurashiruStoreImage from "assets/images/kurashiru_store_ui.png"
import { Box } from "@mui/system"

function KurashiruStore(): React.ReactElement {
  return (
    <IntroduceWorkArticle
      title="kurashiru store"
      subTitle="In-app select shop for quality food and sweets"
      imageSrc={KurashiruStoreImage}
    >
      <Box mt={4}>
        <Typography variant="h5">Role</Typography>
      </Box>
      <Typography variant="subtitle1">UI/UX Designer</Typography>
      <Typography variant="subtitle1">Front-end engineer</Typography>
      <Typography variant="body1">
        I also learned how to code front-end on this project. I started
        modifying the code written in ERB (Ruby on Rails), and partly Vue.js.
      </Typography>
      <Typography variant="body1">
        Kurashiru was one of the most successfull recipe app already at that
        time in Japan. However, the company was not completely happy with the
        success, and wanted to enter the bigger market; e-commerce. That's how
        the project 'kurashiru store' started.
      </Typography>
      <Typography variant="body1">
        I was responsible for designing user interface of the app. The app was
        web based, and embeded in the kurashiru app as one of the bottom tabs.
        Front-end was written partly in Vue mostly .erb (Ruby on Rails).
      </Typography>
      <Box mt={4}>
        <Typography variant="h5">Challenges</Typography>
      </Box>
      <Typography variant="body1">
        Since I've never designed for E-commerce app, I did a lot of researches
        on major EC web sites, and apps such as Amazon, Rakuten, Mercari, etc.
        Not only the EC apps, but I also researched design of popular sweets
        brands' web sites such as BAKE, Mr. Cheesecake, etc because our main
        product lineups were sweets.
      </Typography>
    </IntroduceWorkArticle>
  )
}

export default KurashiruStore
