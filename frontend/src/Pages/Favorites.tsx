import React, { useEffect, useState } from "react";
import "../Styles/Favorites.scss";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  const handleRemove = (id: number) => {
    const updated = favorites.filter(fav => fav.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="favorites-container">
      <h1>❤️ My Favorites</h1>

      {favorites.length === 0 ? (
        <div className="no-favorites">
          No favorites added yet.
        </div>
      ) : (
        <div className="favorites-grid">
          {favorites.map((fav) => (
            <div key={fav.id} className="favorite-card">
              <img src={fav.image[0]} alt={fav.title} />
              <div className="favorite-card-content">
                <h3>{fav.title}</h3>
                <p>{fav.location}</p>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(fav.id)}
                >
                  Remove ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
