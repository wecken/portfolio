import React from "react"
import kyoto from "assets/images/shorenin.jpg"
import { Box, ButtonBase, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import styled from "@emotion/styled"
import MediaCard from "../molecules/MediaCard"
import kurashiruStore from "assets/images/kurashiru_store_banner.jpg"

function About(): React.ReactElement {
  const { t } = useTranslation()

  const CoverImage = () => {
    return <img src={kyoto} alt={"Kyoto"} style={{ maxWidth: "100%" }} />
  }

  const SNSButton = (color: string, title: string, url: string) => {
    const StyledButton = styled(ButtonBase)`
      padding: 16;
      width: 100%;
      background-color: ${color};
      border-radius: 40px;
      margin: 8px 0;
      min-height: 44px;
      text-transform: none;
    `
    const StyledTypography = styled(Typography)`
      color: #fff;
    `
    return (
      <StyledButton onClick={() => window.open(url)}>
        <StyledTypography variant="button">{title}</StyledTypography>
      </StyledButton>
    )
  }

  return (
    <Grid
      container
      direction={"column"}
      alignItems={"center"}
      justifyContent={"flex-start"}
    >
      <CoverImage />
      <Grid
        container
        padding={2}
        item
        direction={"column"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        style={{ width: "100%" }}
      >
        <Box mb={4}>
          <Typography variant="h1">{t("About Wecken")}</Typography>
          <Typography variant="body1">
            {t(
              "Wecken is a Japan-based UI/UX designer, good at mobile app UI design with a good understanding of front end engineering. This web site is designed and coded by Wecken"
            )}
          </Typography>
        </Box>

        <Box mb={4} style={{ width: "100%" }}>
          <MediaCard
            title={t("Works")}
            body={t("Here are my previous works")}
            imageSrc={kurashiruStore}
            to={"/works"}
          />
        </Box>

        <Box mb={4} style={{ width: "100%" }}>
          <Box mb={1}>
            <Typography variant="h2">{t("Blogs")}</Typography>
            <Typography variant="body1">
              {t("I'm writing about UI design and front-end engineering")}
            </Typography>
          </Box>
          {SNSButton(
            "rgb(44, 182, 150)",
            "Note",
            "https://twitter.com/hiro_yuki_"
          )}
          {SNSButton("#1DA1F2", "Zenn", "https://twitter.com/hiro_yuki_")}
        </Box>
        <Box mb={4} style={{ width: "100%" }}>
          <Typography variant="h2">{t("Contacts")}</Typography>
          {SNSButton("#3ea8ff", "Twitter", "https://twitter.com/hiro_yuki_")}
          {SNSButton("#0077B5", "LinkedIn", "https://twitter.com/hiro_yuki_")}
        </Box>
      </Grid>
    </Grid>
  )
}

export default About
