import { Link } from "react-router-dom";
import "firebase/storage";
import { LuClipboardEdit } from "react-icons/lu";
import "./Article.css";
import "./ArticleFooter.css";
import "./ArticleNav.css";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import ArticleListItem from "./ArticleListItem";
import { db, addDatas, getDatas } from "../api/firebase";
import ArticleContent from "./ArticleContent";

function Article({}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDataList, setModalDataList] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalData = async (data) => {
    setModalDataList((prevList) => [...prevList, data]);
    await addDatas("articles", data);

    closeModal();
  };

  useEffect(() => {
    const fetchData = async () => {
      const articles = await getDatas("articles");
      setModalDataList(articles);
    };

    fetchData();
  }, []);

  return (
    <div className="main-container">
      <div className="article-container">
        <div className="wrap">
          <div className="article-header">
            <div className="article-header-inner">
              <h1 className="article-title">Community</h1>
              <div className="article-category">
                <ul>
                  <li className="category-list">
                    <Link to="/article">All</Link>
                  </li>
                  <li className="category-list">
                    <span>나눔/분양</span>
                  </li>
                  <li className="category-list">
                    <span>꿀팁</span>
                  </li>
                  <li className="category-list">
                    <span>갤러리</span>
                  </li>
                </ul>
              </div>
              <div className="article-illust">
                <div className="article-illust-img">
                  <figure className="article-img">
                    {/* 주형님이 준 이미지 삽입<img/> */}
                  </figure>
                </div>
                <div className="article-illust-img-hover">
                  <figure className="article-img">
                    {/* 주형님이 준 이미지 삽입<img/>  java.. 구현? */}
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="article-body">
            <div className="article-body-inner">
              <div className="write" onClick={openModal}>
                <p className="write-content">글쓰기</p>
                <LuClipboardEdit />
              </div>
              {modalDataList.map((modalData, index) => (
                <ArticleListItem
                  key={index}
                  modalData={modalData}
                  index={index}
                />
              ))}
            </div>
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              onSendData={handleModalData}
            />

            <div className="load-more">{/* Link + img + hover  */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Article;
