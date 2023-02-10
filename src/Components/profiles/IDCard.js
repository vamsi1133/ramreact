import React from "react";
import { Avatar, Card, CardHeader, Typography } from "@mui/material";

function IDCard({ name, age, avatar, id }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardHeader
        avatar={<Avatar sx={{ width: 56, height: 56 }} src={avatar} />}
        title={name}
        subheader={`Age: ${age}`}
      />
      <Typography variant="body2" color="textSecondary" component="p">
        ID: {id}
      </Typography>
    </Card>
  );
}

export default IDCard;
