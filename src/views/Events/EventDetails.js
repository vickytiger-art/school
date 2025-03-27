import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Events.css";

const EventDetails = () => {
  const { id } = useParams();
  const [eventMedia, setEventMedia] = useState([]);

  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [mediaType, setMediaType] = useState("photo");
  const [mediaUrl, setMediaUrl] = useState("");
  const [mediaFile, setMediaFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMediaFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // Preview file before uploading
    }
  };

  // Upload Media (URL or File)
  const addMedia = () => {
    if (mediaUrl.trim()) {
      // Upload from URL
      setEventMedia([...eventMedia, { type: mediaType, url: mediaUrl }]);
    } else if (mediaFile) {
      // Upload from File Storage (Temporary Preview)
      setEventMedia([...eventMedia, { type: mediaType, url: previewUrl }]);
    }

    // Reset input fields
    setMediaUrl("");
    setMediaFile(null);
    setPreviewUrl("");
    setShowUploadPopup(false);
  };

  return (
    <div className="event-details-container">
      <h2 className="event-title">Event Media</h2>

      {/* Display Uploaded Media */}
      <div className="media-grid">
        {eventMedia.map((media, index) => (
          <div key={index} className="media-item">
            {media.type === "photo" ? (
              <img src={media.url} alt="Event Media" />
            ) : (
              <video controls src={media.url}></video>
            )}
          </div>
        ))}
      </div>

      {/* Admin Only: Upload Button */}
      <button className="upload-media-btn" onClick={() => setShowUploadPopup(true)}>
        Upload Media
      </button>

      {/* Upload Media Popup */}
      {showUploadPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Upload Media</h3>

            {/* Select Media Type */}
            <select value={mediaType} onChange={(e) => setMediaType(e.target.value)}>
              <option value="photo">Photo</option>
              <option value="video">Video</option>
            </select>

            {/* Upload from URL */}
            <input
              type="text"
              placeholder="Media URL"
              value={mediaUrl}
              onChange={(e) => {
                setMediaUrl(e.target.value);
                setMediaFile(null);
                setPreviewUrl("");
              }}
            />

            {/* OR Upload from Storage */}
            <input type="file" accept="image/*,video/*" onChange={handleFileChange} />

            {/* Show Preview for File Uploads */}
            {previewUrl && (
              <div className="preview">
                {mediaType === "photo" ? (
                  <img src={previewUrl} alt="Preview" />
                ) : (
                  <video controls src={previewUrl}></video>
                )}
              </div>
            )}

            {/* Upload Button */}
            <button onClick={addMedia}>Upload</button>
            <button className="close-btn" onClick={() => setShowUploadPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
