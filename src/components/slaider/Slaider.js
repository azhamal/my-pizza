import { Carousel } from "antd";
import { SlaiderItemsData } from "../../consts";
import React from "react";
import SlaiderItem from "./SlaiderItem";

export const Slaider = () => {
  return (
    <Carousel slidesPerRow={5} style={{backgroundColor:"blue"}}>
      {
       SlaiderItemsData.map((slider,index) =>(
        <SlaiderItem key={index} src={slider.src}/>
       ))
      }
      </Carousel>
  ) 
};
export default Slaider;
