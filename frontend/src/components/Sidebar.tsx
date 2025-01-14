import React from 'react';

interface SidebarProps {
  onCreateUser: (user: { username: string; age: number; hobbies: string[] }) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onCreateUser }) => {
  const hobbies = ['Reading', 'Gaming', 'Cooking', 'Sports'];

  const handleDragStart = (event: React.DragEvent, hobby: string) => {
    event.dataTransfer.setData('hobby', hobby);
  };

  return (
    <div>
      <h2>Hobby Categories</h2>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby} draggable onDragStart={(e) => handleDragStart(e, hobby)}>
            {hobby}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
