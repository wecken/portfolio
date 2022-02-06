import React from "react"
import { Typography } from "@mui/material"
import IntroduceWorkArticle from "../molecules/IntroduceWorkArticle"
import KurashiruStoreImage from "assets/images/kurashiru_store_ui.png"
import { Box } from "@mui/system"
import creative from "../../../assets/images/kurashiru_store_creative.png"
import flow from "../../../assets/images/kurashiru_store_flow.png"
import spec from "../../../assets/images/kurashiru_store_spec.png"
import styled from "@emotion/styled"

function KurashiruStore(): React.ReactElement {
  const articleImage = (imageSrc: string, alt: string) => {
    return <img src={imageSrc} alt={alt} style={{ maxWidth: "100%" }} />
  }
  const StyledParagraph = styled(Typography)`
    margin: 16px 0;
  `
  return (
    <IntroduceWorkArticle
      title="kurashiru store (2020)"
      subTitle="In-app select shop for quality food and sweets"
      imageSrc={KurashiruStoreImage}
    >
      <StyledParagraph variant="body1">
        Kurashiru was one of the most successfull recipe app already at that
        time in Japan. However, the company was not completely happy with the
        success, and wanted to enter the bigger market; e-commerce. That's how
        the project 'kurashiru store' started.
      </StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">Role</Typography>
      </Box>
      <StyledParagraph variant="body1">UI/UX Designer</StyledParagraph>
      <StyledParagraph variant="body1">Front-end engineer</StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">Tools</Typography>
      </Box>
      <StyledParagraph variant="body1">
        Figma, Visual Studio Code, SourceTree
      </StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">Skills</Typography>
      </Box>
      <StyledParagraph variant="body1">
        UI/UX Design, Graphic Design, Front-end engineering (ERB, vue.js,
        HTML/CSS), Git (GitHub)
      </StyledParagraph>
      <Box mt={4}>
        <Typography variant="h3">Challenges</Typography>
      </Box>
      <StyledParagraph variant="body1">
        Since I've never designed for E-commerce app, I did a lot of researches
        on major EC web sites, and apps such as Amazon, Rakuten, Mercari, etc.
        Not only the EC apps, but I also researched design of popular sweets
        brands' web sites such as BAKE, Mr. Cheesecake, etc because our main
        product lineups were sweets.
      </StyledParagraph>
      <StyledParagraph variant="body1">
        This project was also where I learned designing banners, or other
        creative works. As EC service, the UI that just works is not enough, but
        we needed to sell products. Therefore, various methods for communicating
        with customers were needed. I created many banners in different sizes
        and forms to attract customers, and make our products look great.
      </StyledParagraph>
      {articleImage(
        creative,
        "Example of my creative works (static landing page)"
      )}
      <Box my={4}>
        <Typography variant="h3">Design</Typography>
      </Box>
      {articleImage(
        spec,
        "part of the design specification of kurashiru store"
      )}
      <StyledParagraph variant="body1">
        I started with designing the product description page first because we
        offered very few number of items in the beginning, which made the
        collection page or category page not so important.
      </StyledParagraph>
      {articleImage(flow, "Sign up flow.")}
      <StyledParagraph variant="body1">
        I also designed sign up flow very carefully because it's where the most
        of customers drop out, and end up without getting to conversion. One of
        the most important feature was that customer could actually put the item
        in the cart without having an account. This strategy was very successful
        because (I assume) once the customer puts itmes into the cart, creating
        account and entering forms seem to be very natural. If we asked creating
        account before customer start interacting with our services, many of
        them would have dropped out earlier. To achieve this, the logic behind
        the scene is pretty complex as you can see the image above. However,
        from customer point of view, the design was very clean and simple.
      </StyledParagraph>
    </IntroduceWorkArticle>
  )
}

export default KurashiruStore
