import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Slideshow from './Slideshow.jsx';
import CollapseMenu from './Collapse.jsx';
import Tag from './Tag.jsx';
import Rating from './Rating.jsx';
import data from '../data.json';

export default function Location() {
  const { id } = useParams();
  const [isValidId, setIsValidId] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const idsArray = data.map((item) => String(item.id));
    if (idsArray.includes(id)) {
      setIsValidId(true);
    } else {
      setIsValidId(false);
    }
    setChecked(true);
  }, [id]);

  if (!checked) {
    return <p>Chargement...</p>;
  }
  if (!isValidId) {
    return <Navigate to="/404" />;
  }

  const item = data.find((item) => item.id === id);
  const hostName = item.host.name;
  const name = hostName.split(' ');

  function EquipmentContent({ equipmentData }) {
    return (
      <div>
        {equipmentData.map((item, index) => (
          <span key={index}>
            {item.trim()}
            <br />
          </span>
        ))}
      </div>
    );
  }

  const description = {
    title: 'Description',
    content: item.description,
  };
  const equipment = {
    title: 'Équipements',
    content: EquipmentContent({ equipmentData: item.equipments }),
  };

  return (
    <div className="location-page">
      <Slideshow locationId={item} />
      <div className="location">
        <div className="location-info">
          <h1>{item.title}</h1>
          <p>{item.location}</p>
          <Tag ToTag={item} />
        </div>
        <div className="host-and-rating">
          <div className="host">
            <span>
              {name[0]}
              <br />
              {name[1]}
            </span>
            <img
              className="host-picture"
              src={item.host.picture}
              alt={`Portrait de ${item.host.name}`}
            />
          </div>
          <Rating rating={item.rating} />
        </div>
      </div>
      <div className="description-equipment">
        <CollapseMenu
          collapseData={description}
          customClass={'location-collapse'}
        />
        <CollapseMenu
          collapseData={equipment}
          customClass={'location-collapse'}
        />
      </div>
    </div>
  );
}
