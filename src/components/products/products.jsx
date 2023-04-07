import React, { useState } from 'react';
// import '../moda/modal.scss'

const Modal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [productIndex, setProductIndex] = useState(0);

  const productCost = ['Клод Моне', 'Леонардо да Винчи', 'Винсент Ван Гог', 'Пикассо', 'Сальвадор Дали', 'Эдвард Мунк'];

  const productList = [
    {
      productImg: 'path/to/product1.jpg',
      title: 'Клод Моне',
    },
    {
      productImg: 'path/to/product2.jpg',
      title: 'Леонардо да Винчи',
    },
    {
      productImg: 'path/to/product3.jpg',
      title: 'Винсент Ван Гог',
    },
    {
      productImg: 'path/to/product4.jpg',
      title: 'Пикассо',
    },
    {
      productImg: 'path/to/product5.jpg',
      title: 'Сальвадор Дали',
    },
    {
      productImg: 'path/to/product6.jpg',
      title: 'Эдвард Мунк',
    },
  ];

  const handleClick = (index) => {
    setProductIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className={`modal ${modalVisible ? 'modal--bg' : ''}`} onClick={closeModal}>
        <div className={`modal__content ${modalVisible ? 'modal__content--show' : ''}`}>
          <img className="modal__img" src={productList[productIndex].productImg} alt="Product" />
          <h2 className="detail__title">{productList[productIndex].title}</h2>
          <p className="detail__price">{productCost[productIndex]}</p>
          <button className="modal__close" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
      <div className="product__list">
        {productList.map((product, index) => (
          <div className="product__item" key={index}>
            <img className="product__img" src={product.productImg} alt="Product" />
            <h3 className="product__title">{product.title}</h3>
            <button className="product__viewBtn" onClick={() => handleClick(index)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

const Products = () => {
  return (
    <div>
      <h1>My Products</h1>
      <Modal />
    </div>
  );
};

export default Products;
