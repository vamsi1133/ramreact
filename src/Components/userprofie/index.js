import { Button, Card, CardContent, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getScore } from "../../store/actions/scoreActions";

function Score(props) {
  const dispatch = useDispatch();
  const scores = useSelector(({ score }) => score.scores) || [];
  return (
    <>
      <Container sx={{ textAlign: "center" }}>
        <Typography
          sx={{ fontSize: 30, color: "grey" }}
          color="text.primary"
          gutterBottom
        >
          SCORE BOARD
        </Typography>
        <Button variant="contained" onClick={() => dispatch(getScore())}>
          GET SCORES
        </Button>
        {scores.map((val) => {
          return (
            <Card sx={{ maxWidth: 275, margin: 10 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14, color: "red" }}
                  color="text.secondary"
                  gutterBottom
                >
                  {val.team}
                </Typography>
                <Typography sx={{ fontSize: 25, color: "black" }} gutterBottom>
                  {val.score}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Container>
    </>
  );
}

export default Score;
