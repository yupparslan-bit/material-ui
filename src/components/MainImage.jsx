import React from "react";
import Image from "../assets/image.jpg";
import CardMedia from "@material-ui/core/CardMedia";

export default function MainImage() {
  return (
    <CardMedia
      image={Image}
      style={{ width: "1200px", height: "600px" }}
      title="noone"
    />
  );
}
