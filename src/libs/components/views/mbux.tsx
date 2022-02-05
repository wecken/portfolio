import React from "react"
import { Typography } from "@mui/material"
import IntroduceWorkArticle from "../molecules/IntroduceWorkArticle"
import MBUX from "assets/images/MBUX.jpg"
import { Box } from "@mui/system"

function Mbux(): React.ReactElement {
  return (
    <IntroduceWorkArticle
      title="MBUX - Mercedes-Benz User Experience"
      imageSrc={MBUX}
    >
      <Box mt={4}>
        <Typography variant="h5">Role</Typography>
      </Box>
      <Typography variant="body1">
        At Mercedes-Benz Research and Development, I was responsible for UI
        concepts (such as wireframes, and information architecture) of the
        brand's GPS navigation system. The product is called MBUX.
      </Typography>
      <Box mt={4}>
        <Typography variant="h5">Challenges</Typography>
      </Box>
      <Typography variant="body1">
        When I joinded the company, the product was catastrophic. Even in the
        production release, the entire system constantly kept crashing, which,
        as a matter of course, resulted a number of customer complaints. First,
        I had to find out why that situation was happening. The biggest problem
        I found was too many "Japan-specific" features. Due to historical
        reason, Japanese GPS navigation system evoloved in peculiar way.
        Therefore, the product and the process of development have been so much
        complicated. I had to align the Japan-specific UI to global UI Design
        Strategy asking myself "are these features really necessary?". To find
        out, I conducted an online survey. I asked Japanese users how often they
        user such features. As a result, I found a lot of them were not used
        anymore. Therefore, I reduced a number of features that were
        'over-localized'. This resulted significant improvements of system
        stability, and it allowed me to import many advanced features that were
        standard in other countries, such as 'Free-text search'.
      </Typography>
    </IntroduceWorkArticle>
  )
}

export default Mbux
