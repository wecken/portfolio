import React, { VFC } from "react"
import { ButtonBase, Card, Grid, Typography } from "@mui/material"
import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/system"
import { useTranslation } from "react-i18next"

interface Props {
  title: string
  subtitle?: string
  body: string
  imageSrc: string
  to?: string
}

const MediaCard: VFC<Props> = ({ title, subtitle, body, imageSrc, to }) => {
  const StyledCard = styled(Card)`
    background-color: "white";
  `
  const StyledButtonBase = styled(ButtonBase)`
    max-width: 100%;
  `
  const StyledTypography = styled(Typography)`
    text-align: left;
  `

  const TextConteiner = styled(Grid)`
    max-width: 100%;
  `

  const styles = {
    card: {},
    textContainer: {
      padding: "16px",
      width: "100%",
    },
  }

  const CoverImage = () => {
    return <img src={imageSrc} alt={title} style={{ maxWidth: "100%" }} />
  }
  const navigate = useNavigate()
  const onClickCard = () => {
    to
      ? navigate(to)
      : alert("Wecken hasn't published the content yet. Please wait.")
  }
  const { t } = useTranslation()

  return (
    <StyledButtonBase onClick={onClickCard}>
      <StyledCard>
        <TextConteiner container alignItems="center">
          <CoverImage />
          <Grid style={styles.textContainer} gap={2}>
            <Box
              display="flex"
              justifyContent="flex-start"
              flexDirection="column"
              width={"100%"}
            >
              <Box mb={1}>
                <StyledTypography variant="h2">{title}</StyledTypography>
              </Box>
              {subtitle && (
                <StyledTypography variant="subtitle2">
                  {subtitle}
                </StyledTypography>
              )}
              <StyledTypography color={"gray"} variant="body2">
                {body}
              </StyledTypography>
              <StyledTypography
                variant="button"
                color={"primary"}
                style={{ alignSelf: "flex-end", textTransform: "capitalize" }}
              >
                {t("Detail")}
              </StyledTypography>
            </Box>
          </Grid>
        </TextConteiner>
      </StyledCard>
    </StyledButtonBase>
  )
}

export default MediaCard
