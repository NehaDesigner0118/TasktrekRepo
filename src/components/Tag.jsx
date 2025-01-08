import React from "react";
import "./Tag.css";

const Tag = ({ selectTag, selected, Tagname }) => {
  const tagStyle = {
    HTML: { background: "#fda821" },
    CSS: { background: "#15d4c8" },
    Javascript: { background: "#ffd12c" },
    React: { background: "#4cdafc" },
    default: { background: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      style={selected ? tagStyle[Tagname] : tagStyle.default}
      className="tag"
      onClick={() => selectTag(Tagname)}
    >
      {Tagname}
    </button>
  );
};

export default Tag;
