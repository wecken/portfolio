import React, { VFC } from "react"
import { Card, Grid, Typography } from "@mui/material"
import styled from "@emotion/styled"

interface Props {
  title: string
  subtitle?: string
  body: string
  imageSrc: string
}

const MediaCard: VFC<Props> = ({ title, subtitle, body, imageSrc }) => {
  const StyledCard = styled(Card)`
    background-color: "white";
  `
  const styles = {
    card: {},
    textContainer: {
      padding: "16px",
    },
  }
  const MbuxImage = () => {
    return <img src={imageSrc} alt="MBUX" style={{ maxWidth: "100%" }} />
  }
  return (
    <StyledCard>
      <Grid>
        <MbuxImage />
        <Grid style={styles.textContainer}>
          <Typography variant="h4">{title}</Typography>
          {subtitle && <Typography variant="subtitle2">2021</Typography>}
          <Typography variant="body2">{body}</Typography>
        </Grid>
      </Grid>
    </StyledCard>
  )
}

export default MediaCard
