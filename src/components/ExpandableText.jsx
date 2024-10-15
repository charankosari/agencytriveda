import React, { useRef, useState, useEffect } from "react";

const ExpandableText = ({ index, description }) => {
  const textRef = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    // Check if the content is larger than the container's max height
    const isContentOverflowing = textRef.current.scrollHeight > 80;
    setIsOverflow(isContentOverflowing);
  }, [description]); // Re-run when description changes

  const handleMouseOver = () => {
    if (isOverflow) {
      textRef.current.style.overflow = "auto";
    }
  };

  const handleMouseOut = () => {
    if (isOverflow) {
      textRef.current.style.overflow = "hidden";
    }
  };

  const handleClick = () => {
    if (isOverflow) {
      textRef.current.style.overflow = "auto";
    }
  };

  return (
    <p
      ref={textRef}
      id={`expandable-text-${index}`}
      className="text-left text-gray-500 font-body"
      style={{
        maxHeight: "80px",
        textOverflow: isOverflow ? "ellipsis" : "clip",
        overflow: "hidden",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      {description}
    </p>
  );
};

export default ExpandableText;
