import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddCard.css';

const AddCard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSave = () => {
    const cardData = { title, description, category, image };
    const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
    localStorage.setItem('cards', JSON.stringify([...storedCards, cardData]));
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="add-card-form">
      <form className="card-form">
        {/* Category Title */}
        <h3 className="category-title">Select Category:</h3>
        <div className="category-buttons">
          {['Water Filtration', 'Boiling', 'Plants', 'Sedimentation'].map(
            (cat) => (
              <button
                key={cat}
                type="button"
                className={`category-button ${
                  category === cat ? 'active' : ''
                }`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* Title */}
        <label className="input-label">
          <span className="label-heading">Title:</span>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        {/* Image Upload */}
        <label className="input-label">
          <span className="label-heading">Image:</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            className="file-input"
          />
        </label>

        {/* Description */}
        <label className="input-label">
          <span className="label-heading">Description:</span>
          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ maxHeight: '500px' }}
            required
          />
        </label>

        {/* Buttons */}
        <div className="form-buttons">
          <button type="button" onClick={handleCancel} className="cancel-btn">
            Cancel
          </button>
          <button type="submit" onClick={handleSave} className="save-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCard;
