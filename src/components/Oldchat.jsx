import React, { useRef } from "react";
import { motion } from "framer-motion"; // Make sure to import motion from 'framer-motion'
import { IoSend } from "react-icons/io5"; // Assuming you're using react-icons for the send icon

const YourComponent = () => {
  const inputRef = useRef(null);

  const handleSend = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.textContent; // Get the text content of the div
    // Do something with the input value, for example, send it to a function
    console.log("Input Value:", inputValue);
    // Clear the input field
    inputRef.current.textContent = "";
  };

  return (
    <div
      className="inputarea"
      style={{
        width: "100%",
        height: "10vh !important",
        zIndex: "2",
      }}
    >
      <form
        className="footerform"
        style={{
          position: "fixed",
          width: "56%",
          bottom: 0,
          padding: "23px",
          backgroundColor: "#DDE9FF",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          borderRadius: "10px",
        }}
        onSubmit={handleSend}
      >
        <motion.div
          contentEditable
          style={{
            paddingLeft: "20px",
            height: "40px",
            width: "70%",
            border: "none",
            borderRadius: "5px",
            outline: "none", // Remove the default outline
            overflowY: "scroll",
            borderBottom: "1px solid black",
          }}
          ref={inputRef}
          placeholder="Ask Here!"
          onKeyDown={(e) => {
            if (e.keyCode === 13 && !e.shiftKey) {
              handleSend(e);
            }
          }}
          onInput={(e) => {
            // This ensures the div remains empty if the user removes all content
            if (e.target.textContent.trim() === "") {
              e.target.innerHTML = "";
            }
          }}
        />
        <motion.button
          type="submit"
          style={{
            borderRadius: "50px",
            width: "13%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            backgroundColor: "#439AFF",
          }}
          className="sendIcon"
        >
          <IoSend style={{ color: "white", backgroundColor: "" }} />
        </motion.button>
      </form>
    </div>
  );
};

export default YourComponent;
