import { React, useState } from "react";

export default function MovieCard({ Movie1 }) {
  return (
    <div className="movie">
      <div>
        <p>{Movie1.Year}</p>
      </div>
      <div>
        <img
          src={
            Movie1.Poster !== "N/A" ? Movie1.Poster : "https://placehold.co/400"
          }
          alt={Movie1.Title}
        />
      </div>
      <div>
        <span>{Movie1.Type}</span>
        <h3>{Movie1.Title}</h3>
      </div>
    </div>
  );
}
