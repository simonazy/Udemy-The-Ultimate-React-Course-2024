import { useState } from "react";

import faqs from "./data";
import "./style.css";

function ItemList() {
  const [openIndex, setOpenIndex] = useState();

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <Item
          title={faq.title}
          key={index}
          index={index}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        >
          {faq.text}
        </Item>
      ))}
    </div>
  );
}

function Item({ title, index, children, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;
  function toggleOpen() {
    setOpenIndex(isOpen ? null : index);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={toggleOpen}>
      <button className="icon">{isOpen ? "-" : "+"}</button>
      <p className="number">{index > 10 ? index : `0${index + 1}`}</p>
      <p className="title">{title}</p>
      <p className="content-box">{isOpen ? children : ""}</p>
    </div>
  );
}

export default ItemList;
