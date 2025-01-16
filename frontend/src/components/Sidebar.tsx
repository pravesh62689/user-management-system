import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Sidebar: React.FC = () => {
  const hobbies = useSelector((state: RootState) => state.users.hobbies);
  const [search, setSearch] = useState("");

  const filteredHobbies = hobbies.filter((hobby) =>
    hobby.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="sidebar"
      style={{
        height: "100vh",
        overflowY: "auto",
        padding: "10px 0",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f4f4f4",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Hobby Categories</h3>
      <input
        type="text"
        placeholder="Search hobbies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "90%",
          margin: "10px auto",
          display: "block",
          padding: "10px",
          borderRadius: "20px",
          border: "1px solid #ddd",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      />
      <ul
        className="hobby-list"
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {filteredHobbies.map((hobby) => (
          <li
            key={hobby.id}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("hobbyId", hobby.id.toString())}
            style={{
              padding: "10px",
              margin: "5px 10px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              cursor: "grab",
            }}
          >
            {hobby.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
