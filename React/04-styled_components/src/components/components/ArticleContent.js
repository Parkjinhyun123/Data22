import React, { useEffect, useState } from "react";
import iconClose from "../assets/icon/icon-close_ff9b50.png";
import chevronLeftIcon from "../assets/icon/chevron_left_or.png";
import chevronRighttIcon from "../assets/icon/chevron_right_or.png";
import "./ArticleContent.css";

const ArticleContent = ({ isOpen, uploadImages, onSendData, onClose }) => {
  const [images, setImages] = useState([]);
  const [showChevron, setShowChevron] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (isOpen) {
      setImages([]);
      setShowChevron(false);
      setCurrentIndex(0);
      setTitle("");
      setContent("");
    }
  }, [isOpen]);
  if (!isOpen) return null;

  const handleButtonClick = () => {
    onClose();
  };

  const handleAddImageClick = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  const handleImageChange = (e) => {
    const fileInput = e.target;
    const selectedImages = Array.from(fileInput.files);

    if (selectedImages.length > 0) {
      setImages((prevImages) => {
        const newImages = [...prevImages, ...selectedImages];
        setCurrentIndex(0);

        const newShowChevron = newImages.length > 1;
        setShowChevron(newShowChevron);

        return newImages;
      });
    }
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSendData = async () => {
    if (isOpen) {
      try {
        const imageUrls = await uploadImages(images);

        const data = {
          title,
          content,
          images: imageUrls,
        };

        console.log("handleSendData called with data: ", data);
        onSendData(data);
        onClose();
      } catch (error) {
        console.error("Error uploading images: ", error);
      }
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-container">
          <div className="modal-header">
            <span className="modal-span">글쓰기</span>
            <img className="close-img" src={iconClose} alt="close-icon" />
          </div>
          <div className="modal-content">
            <div className="modal-imgBox">
              <figure id="imageFigure">
                <div className="image-indicators">
                  <div className="image-indicator"></div>
                </div>
                <img />

                <div className="modal-chevron modal-chevron-left">
                  <img />
                </div>
                <div className="modal-chevron modal-chevron-right">
                  <img />
                </div>
              </figure>
              <input
                type="file"
                id="imageInput"
                style={{ display: "none" }}
                accept="image/*"
                multiple
              />
              <div className="add-img-container">+ 사진등록하기</div>
            </div>
            <div className="modal-contentBox">
              <div className="modal-content-title">
                <input
                  className="modal-input"
                  placeholder="제목을 입력하세요"
                />
                <textarea
                  className="modal-input2"
                  placeholder="내용을 입력하세요"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
