import React from "react";
import Carousel from "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";
import image1 from "../assets/vol/26.png";
import image2 from "../assets/vol/27.png";
import image3 from "../assets/vol/21.png";
import image4 from "../assets/vol/20.png";
import image5 from "../assets/vol/19.png";
import image6 from "../assets/vol/25.png";
import between from "../assets/homeImage/between.png";

export default function Slider() {
  const items = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },
    {
      image: image5,
    },
    {
      image: image6,
    },
  ];

  function Item(props) {
    return (
      <Paper>
        <img className='slideImage' src={props.item.image}></img>
      </Paper>
    );
  }

  return (
    <>
      <Carousel
        className='buttonWrapper'
        navButtonsProps={{
          style: {
            backgroundColor: "#fb8c00",
          },
        }}
        indicatorIconButtonProps={{
          style: {
            display: "none",
          },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <Paper>
        <img className='betweenImage' src={between}></img>
      </Paper>
    </>
  );
}
