import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { FlexBox } from "../../components/FlexBox";
import { shades } from "../../theme";
import Input from "../../components/Input";
import Posts from "../../components/Posts";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getRandomPrompt } from "../../utils/getRandomPrompt";
import { updateForm } from "../../state/formSlice";
import PaginationBtns from "./PaginationBtns";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const isMobile = useMediaQuery("(max-width:767px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { posts, status } = useSelector(
    (state) => state.postsReducer,
    shallowEqual
  );
  const { user } = useSelector((state) => state.userReducer, shallowEqual);

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt();
    dispatch(updateForm({ prompt: randomPrompt }));
  };

  return (
    <Box padding={{ xs: "20px 5%", md: "50px 5%" }}>
      {!user && (
        <Stack
          textAlign="center"
          alignItems="center"
          maxWidth="700px"
          minWidth="320px"
          p="20px 20px 30px"
          m="0 auto"
          sx={{
            borderRadius: "15px",
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        >
          <Typography fontSize="20px">
            Welcome! You are almost there.
          </Typography>
          <Typography mt="20px">
            To create imaginative and visually stunning images through DALL.E
            AI, please sign in to your account. Once you sign in, you'll have
            access to our image creation tools and can be able to create, share
            and save your own images for future use.
          </Typography>
          <Typography fontWeight={500} mb="20px" mt="5px">
            <b>Let's get started and bring your creativity to life!</b>
          </Typography>
          <Button
            sx={{ p: "10px 30px" }}
            onClick={() => navigate("/signin")}
            variant="contained"
          >
            SIGN IN to create
          </Button>
        </Stack>
      )}

      {/* Heading */}
      {!!user && (
        <Box padding={{ xs: 0, md: "0 10px" }}>
          <Typography mb="5px" variant="h3">
            Create
          </Typography>
          <Typography variant="small" color={shades.primary[300]}>
            Create imaginative and visually stunning images through DALL.E AI
            and share them with the community.
          </Typography>

          <FlexBox m="20px 0 15px" columnGap={2}>
            <Typography color={shades.primary[300]}>
              Start with a detailed description
            </Typography>
            {!isMobile && (
              <Box
                sx={{
                  cursor: "pointer",
                }}
                padding="7px 10px"
                backgroundColor="secondary.main"
                fontWeight="bold"
                fontSize="12px"
                borderRadius="5px"
                onClick={handleSurpriseMe}
              >
                {user ? "Surprise me" : "Signin"}
              </Box>
            )}
          </FlexBox>
        </Box>
      )}
      {/* Input field */}
      {!!user && (
        <Box
          sx={{ zIndex: 100 }}
          margin={{ xs: 0, md: "0 10px 0" }}
          position={`${!isMobile && "sticky"}`}
          top="70px"
        >
          <Input />
        </Box>
      )}

      {/* ---------posts---------- */}
      {/* Heading */}
      <Box textAlign={user ? "left" : "center"} mt={{ xs: "60px", md: "90px" }}>
        <Typography mb="5px" variant="h3">
          The Community Showcase
        </Typography>
        <Typography variant="small" color={shades.primary[300]}>
          Browse through a collection of imaginative and visually stunning
          images generated by DALL.E AI
        </Typography>
      </Box>
      <Posts {...{ posts, status, community: true }} />
      <PaginationBtns />
    </Box>
  );
};

export default Home;
