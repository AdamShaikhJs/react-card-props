import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
let info = `the body area of the cards the body area of the cards the body
   area of the cards the body area of the cards the body area of
   the cardsthe body area of the cards the body area of the cards the body area
   of the cards the body area of the cards the body area of the cardshe body
   area of the cards the body area of the cards the body areathe body area of the cards the body area of the cards. `;

export default function AreaCard({ id, name, username, email, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <Card sx={{ maxWidth: 345, m: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" color="secondary">
          {name}
        </Typography>
        <Typography gutterBottom variant="body1">
          {username}, {email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {readMore ? info : `${info.substring(0, 130)} ...`}
          <span
            style={{ color: "orange" }}
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "...show less" : "read more"}
          </span>
        </Typography>
        <Button variant="outlined" onClick={() => removeTour(id)}>
          Not Interested
        </Button>
      </CardContent>
    </Card>
  );
}
