import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdAttach } from "react-icons/io"; // Import IoMdAttach icon from react-icons library

const YourComponent = () => {
  const [files, setFiles] = useState([
    {
      name: "myfile.pdf",
    },
  ]);

  const fileUpload = (e) => {
    const file = e.target.files[0]; // Get the first file from the event target
    console.log("file selected =======>", file.name);
    console.log(files);
    setFiles([...files, file]); // Append the new file to the files array
    console.log("====>", files);
    console.log("clicked on image upload");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <motion.label htmlFor="uploadImage" whileHover={{ scale: 1.1 }}>
        <IoMdAttach
          style={{
            cursor: "pointer",
            color: "#439AFF",
            width: "30px",
            height: "30px",
          }}
        />
      </motion.label>
      <input
        id="uploadImage"
        type="file"
        onChange={fileUpload}
        style={{ display: "none" }}
      />
      {/* Display the uploaded files */}
      <div>
        {files.map((file, index) => (
          <div key={index}>{file.name}</div>
        ))}
      </div>
    </div>
  );
};

export default YourComponent;
