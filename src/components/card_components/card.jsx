import React, { useState, useEffect } from "react";
import axios from "axios";
import { SearchContext } from "../../pages/home";
// import Search from "./search";

function CardComponent() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeID, setActiveID] = useState(0);
  const [imageView, setImageView] = useState(false);
  const { searchValue } = React.useContext(SearchContext);

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      try {
        const response = await axios.get(
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rpg-2-data.json"
        );
        if (isMounted) {
          setData(response.data.gallery);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, searchValue]);

  const openImageView = (id) => {
    setActiveID(id);
    setImageView(true);
  };

  const closeImageView = () => {
    setImageView(false);
  };

  return (
    <>
      {/* <Search /> */}
      <div className="wrapper">
        {imageView ? (
          <ImageView {...data[activeID]} _closeImageView={closeImageView} />
        ) : (
          <Gallery data={filteredData} _openImageView={openImageView} />
        )}
      </div>
    </>
  );
}

// остальной код без изменений


function ImageView(props) {
  return (
    <div className="imageview-wrapper fadeIn">
      <div className="grid grid-cols-1 justify-around">
        <Image CSSClass="imageview-image" src={props.src} alt={props.name} />
        <div className="imageview-info">
          <button className="imageview-close" onClick={props._closeImageView}>
            x
          </button>
          <h2>{props.name}</h2>
          <p>{props.desc}</p>
          <h3>Tags</h3>
          <ul>
            {props.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Gallery(props) {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-[15px]">
      {props.data.map((data) => (
        <Tile
          key={data.id}
          id={data.id}
          src={data.src}
          name={data.name}
          desc={data.desc}
          tags={data.tags}
          _openImageView={props._openImageView}
        />
      ))}
    </div>
  );
}

function Tile(props) {
  const handleClick = () => {
    props._openImageView(props.id);
  };

  return (
    <div className="gallery-tile" onClick={handleClick}>
      <div className="picture-info">
        <h2>{props.name}</h2>
        {/* <p>{props.desc}</p> */}
      </div>
      <Image CSSClass="tile-image" src={props.src} alt={props.name} />
    </div>
  );
}

const Image = (props) => (
  <img className={props.CSSClass} src={props.src} alt={props.name} />
);

export default CardComponent;
