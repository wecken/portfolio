import React, { VFC } from "react"
import { ButtonBase, Card, Grid, Typography } from "@mui/material"
import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/system"

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

  const StyledTypography = styled(Typography)`
    text-align: left;
  `

  const styles = {
    card: {},
    textContainer: {
      padding: "16px",
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

  return (
    <ButtonBase onClick={onClickCard}>
      <StyledCard>
        <Grid container alignItems="center">
          <CoverImage />
          <Grid style={styles.textContainer} gap={2}>
            <Box
              display="flex"
              justifyContent="flex-start"
              flexDirection="column"
            >
              <StyledTypography variant="h4">{title}</StyledTypography>
              {subtitle && (
                <StyledTypography variant="subtitle2">2021</StyledTypography>
              )}
              <StyledTypography variant="body2">{body}</StyledTypography>
              <Typography variant="button" style={{ alignSelf: "flex-end" }}>
                <StyledTypography>Detail</StyledTypography>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </StyledCard>
    </ButtonBase>
  )
}

export default MediaCard
