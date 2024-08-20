import React from 'react'
import { FaChevronLeft } from 'react-icons/fa';

const SamplePrev = (props) => {
  const { className, style, onClick } = props;

  return (
    <FaChevronLeft
      onClick={onClick}
      className={className}
      style={{ color: "#F5B322" ,border:"1px solid #F5B322",backgroundColor:"",borderRadius:"50%",padding:"2px"}}

    />
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "green" ,borderRadius:"50%"}}
    //   onClick={onClick}
    // ></div>
  );
}

export default SamplePrev;