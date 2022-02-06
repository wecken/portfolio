import React from "react"
import { Typography } from "@mui/material"
import IntroduceWorkArticle from "../molecules/IntroduceWorkArticle"
import MBUX from "assets/images/MBUX.jpg"
import FTS from "assets/images/MBUX_FTS.png"
import { Box } from "@mui/system"
import styled from "@emotion/styled"

function Mbux(): React.ReactElement {
  const StyledParagraph = styled(Typography)`
    margin: 16px 0;
  `
  const articleImage = (imageSrc: string, alt: string) => {
    return <img src={imageSrc} alt={alt} style={{ maxWidth: "100%" }} />
  }
  return (
    <IntroduceWorkArticle
      title="MBUX - Mercedes-Benz User Experience"
      subTitle="The best in-car user experience"
      imageSrc={MBUX}
    >
      <Box mt={4}>
        <Typography variant="h3">Role</Typography>
      </Box>
      <StyledParagraph variant="body1">UI / UX Expert.</StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">Tools</Typography>
      </Box>
      <StyledParagraph variant="body1">
        Sketch.app, Confluence, Jira
      </StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">Skills</Typography>
      </Box>
      <StyledParagraph variant="body1">
        UI Design (Information Architecture), User Research, Usability Research,
        International Communicaitons and Negotiations, English
      </StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">Challenges</Typography>
      </Box>
      <StyledParagraph variant="body1">
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
        use such features. As a result, I found a lot of them were not used
        anymore. Therefore, I reduced a number of features that were
        'over-localized'. This resulted significant improvements of system
        stability, and it allowed me to import many advanced features that were
        standard in other countries, such as 'Free-text search'.
      </StyledParagraph>
      <StyledParagraph variant="body1">
        One of them were free-text search.
      </StyledParagraph>
      {articleImage(FTS, "MBUS Free Text Search for Japanease Market")}
      <StyledParagraph variant="body1">
        Previous generation was featuring address input method where user had to
        choose destination address step by step from state (a.k.a prefecture) to
        street number. This feature was unique to Japanese market. However, this
        method was ineficient. It took about 90 seconds to input average
        Japanese address. Therefore, I redesigned the interaction flow so user
        can immediately start typing the destination, which accepts many types
        of keywords like address, POI name, POI category, POI phone number, and
        ZIP code, using software keyboard. With the new concept I designed, it
        took just 10 seconds to complete the same address, making it 9 times
        faster than previous generation. Because the keyboard allows voice input
        as well, user can input the address even safer and faster while driving.
      </StyledParagraph>
    </IntroduceWorkArticle>
  )
}

export default Mbux
