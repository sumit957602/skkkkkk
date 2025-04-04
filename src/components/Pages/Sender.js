import React, { useState } from "react";
import shortid from "shortid";
import "./Sender.css";

export const Sender = () => {
  return (
    <div>
      <App />
    </div>
  );
};

const App = () => {
  const [input1Files, setInput1Files] = useState([]);
  const [input2Files, setInput2Files] = useState([]);

  const filesizes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const handleFileChange = (e, inputNumber) => {
    let fileArray = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      let reader = new FileReader();
      reader.onloadend = () => {
        const newFile = {
          id: shortid.generate(),
          filename: file.name,
          filetype: file.type,
          fileimage: reader.result,
          datetime: file.lastModifiedDate.toLocaleString("en-IN"),
          filesize: filesizes(file.size),
          fileBlob: file,
        };
        if (inputNumber === 1) {
          setInput1Files((prev) => [...prev, newFile]);
        } else {
          setInput2Files((prev) => [...prev, newFile]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (id, inputNumber) => {
    if (inputNumber === 1) {
      setInput1Files((prev) => prev.filter((file) => file.id !== id));
    } else {
      setInput2Files((prev) => prev.filter((file) => file.id !== id));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input1Files.length === 0 && input2Files.length === 0) {
      alert("Please select files from both inputs.");
      return;
    }

    const formData = new FormData();
    input1Files.forEach((file, index) =>
      formData.append(`input1_file_${index}`, file.fileBlob)
    );
    input2Files.forEach((file, index) =>
      formData.append(`input2_file_${index}`, file.fileBlob)
    );

    try {
      const response = await fetch("https://www.google.com", {
        method: "POST",
        body: formData,
      });

      // Simulating redirect with dummy content
      const dummyHTML = `<html><body><h1>Files Submitted Successfully!</h1></body></html>`;
      const blob = new Blob([dummyHTML], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    } catch (error) {
      alert("Failed to submit files.");
    }
  };

  const renderFilePreview = (files, inputNumber) =>
    files.map((file) => (
      <div className="file-atc-box" key={file.id}>
        {file.filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
          <div className="file-image">
            <img src={file.fileimage} alt="" />
          </div>
        ) : (
          <div className="file-image">
            <i className="far fa-file-alt"></i>
          </div>
        )}
        <div className="file-detail">
          <h6>{file.filename}</h6>
          <p>
            <span>Size: {file.filesize}</span>
            <span className="ml-2">Modified: {file.datetime}</span>
          </p>
          <div className="file-actions">
            <button
              type="button"
              className="file-action-btn"
              onClick={() => handleDelete(file.id, inputNumber)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="fileupload-view">
      <form onSubmit={handleSubmit}>
        {/* Input 1 Section */}
        <div className="upload-section">
          <div className="file-upload-box">
            <label>Image upload</label>
            <input
              type="file"
              multiple
              onChange={(e) => handleFileChange(e, 1)}
            />
          </div>
          <div className="kb-attach-box">
            {renderFilePreview(input1Files, 1)}
          </div>
        </div>

        {/* Input 2 Section */}
        <div className="upload-section">
          <div className="file-upload-box">
            <label>Signature upload</label>
            <input
              type="file"
              multiple
              onChange={(e) => handleFileChange(e, 2)}
            />
          </div>
          <div className="kb-attach-box">
            {renderFilePreview(input2Files, 2)}
          </div>
        </div>

        <div className="kb-buttons-box mt-3">
          <button type="submit" className="btn btn-primary form-submit">
            Submit All
          </button>
        </div>
      </form>
    </div>
  );
};
