import React from "react";
import { FaChevronRight } from "react-icons/fa";

const SampleNext = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaChevronRight
      onClick={onClick}
      className={className}
      style={{ color: "#F5B322" ,border:"1px solid #F5B322",backgroundColor:"",borderRadius:"50%",padding:"2px"}}
    />
    // <h
    //   className={className}
    //   style={{   background: "red",borderRadius:"50%" }}
    //   onClick={onClick}
    // >

    // </h>
  );
};

export default SampleNext;
