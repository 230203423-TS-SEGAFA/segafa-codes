import React, { useState } from 'react';
import './CardColumns.css';
import { IoEllipsisVerticalCircleOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const CardColumns = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: 'Water Filtration system',
      cards: [
        {
          id: 1,
          tags: ['Tag1', 'Tag2'],
          title: 'Material needed',
          description: 'Materials needed to make your own water filtration system using a bottle of water at ur res.',
          image: null,
        },
        {
          id: 2,
          tags: ['Tag3'],
          title: 'Card 2',
          description: 'Description 2',
          image: 'water.jpg',
        },
      ],
    },
    {
      title: 'Boiling Water purification',
      cards: [
        {
          id: 3,
          tags: ['Tag4'],
          title: 'Card 3',
          description: 'How to purify water by boiling water',
          image: 'boiling.jpg',
        },
      ],
    },
    {
      title: 'Purification using plants',
      cards: [],
    },
    {
      title: 'Sedimentation system',
      cards: [
        {
          id: 4,
          tags: [],
          title: 'Card 4',
          description: 'Description 4',
          image: 'image2.jpg',
        },
      ],
    },
  ];

  
  const handleCardClick = (card) => {
    // Passing the card data as state to the ViewCard route
    navigate(`/view-card/${card.id}`, { state: { card } });
  };

  return (
    <div className="columns-container">
      {columns.map((column, index) => (
        <div key={index} className="column">
          <div className="column-title">{column.title}</div>
          <div className="column-cards">
            {column.cards.length > 0 ? (
              column.cards.map((card) => (
                <div
                  key={card.id}
                  className="card"
                  onClick={() => handleCardClick(card)}
                >
                  <div className="card-header">
                    <div className="tags">
                      {card.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                    <IoEllipsisVerticalCircleOutline className="action-icon" />
                  </div>
                  {card.image && <img src={card.image} alt="Card" className="card-image" />}
                  <div className="card-title">{card.title}</div>
                  <div className="card-description">{card.description}</div>
                </div>
              ))
            ) : (
              <div className="empty-column-message">No cards available</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardColumns;
