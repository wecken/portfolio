import React from "react"
import { Typography } from "@mui/material"
import IntroduceWorkArticle from "../molecules/IntroduceWorkArticle"
import EOWImage from "assets/images/EOW_Animation.gif"
import { Box } from "@mui/system"

function EOW(): React.ReactElement {
  return (
    <IntroduceWorkArticle title="Eijiro on the Web" imageSrc={EOWImage}>
      <Box mt={4}>
        <Typography variant="h5">Role</Typography>
      </Box>
      <Typography variant="body1">
        In Castalia Co., Ltd. I was responsible for Project Management, and
        UI/UX Design. This project was to redesign the iOS/Android dictionary
        app called "Eijiro (英辞郎) on the Web", which is one of the most
        popular web dictionary in Japan.{" "}
      </Typography>
      <Box mt={4}>
        <Typography variant="h5">Challenges</Typography>
      </Box>
      <Typography variant="body1">
        Before I redesigned it, there were too many screen transitions making
        the app feel like inneficient to use. Because the app is famous for the
        amount of example sentenses, I wanted the app to be more efficient when
        user is searching for a best suitable result from many of those.
      </Typography>
      <Typography variant="body1">
        I wanted to have a fluent animation to realize efficient interaction
        between master and detail views. Because of animated transition, user
        won't feel getting lost after each interaction.
      </Typography>
    </IntroduceWorkArticle>
  )
}

export default EOW
