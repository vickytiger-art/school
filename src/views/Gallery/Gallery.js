import React, { useState } from "react";
import "./Gallery.css";
import { IoIosAddCircle } from "react-icons/io";

const Gallery = () => {
  const [images, setImages] = useState([
    // { id: 1, url: "https://source.unsplash.com/400x300/?students,education" },
    // { id: 2, url: "https://source.unsplash.com/400x300/?school,classroom" },
    // { id: 3, url: "https://source.unsplash.com/400x300/?learning,books" },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle image selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Add Image
  const addImage = () => {
    if (selectedFile) {
      const newImage = {
        id: images.length + 1,
        url: URL.createObjectURL(selectedFile), // Create a temporary URL for the image
      };
      setImages([...images, newImage]);
      setSelectedFile(null);
      setShowPopup(false);
    }
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">School Gallery</h2>
      <div className="gallery-grid">
        {images.map((img) => (
          <div key={img.id} className="gallery-item">
            <img src={img.url} alt="School" />
          </div>
        ))}
      </div>

      {/* Admin Only: Add Image Button */}
      <button className="add-image-btn" onClick={() => setShowPopup(true)}>
        <IoIosAddCircle /> Add Image
      </button>

      {/* Add Image Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Add New Image</h3>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={addImage}>Upload</button>
            <button className="close-btn" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
