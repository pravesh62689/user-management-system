import React from 'react';
import ReactFlow from 'react-flow-renderer';
import { User } from '../types/user';

interface NodeVisualizationProps {
  users: User[];
  onDelete: (userId: string) => void;
  onUpdate: (userId: string, updatedUser: User) => void;
}

const NodeVisualization: React.FC<NodeVisualizationProps> = ({ users, onDelete, onUpdate }) => {
  const nodes = users.map((user) => ({
    id: user.id,
    data: { label: `${user.username} (Age: ${user.age})` },
    position: { x: Math.random() * 500, y: Math.random() * 500 },
  }));

  const edges = users
    .flatMap((user) =>
      user.hobbies.map((hobby, index) => ({
        id: `${user.id}-${hobby}`,
        source: user.id,
        target: `${user.id}-hobby-${index}`,
        type: 'smoothstep',
        animated: true,
      }))
    );

  const handleNodeClick = (event: React.MouseEvent, nodeId: string) => {
    const user = users.find((user) => user.id === nodeId);
    if (user) {
      const updatedUser = { ...user, age: user.age + 1 }; // Example update
      onUpdate(nodeId, updatedUser);
    }
  };

  const handleNodeDelete = (event: React.MouseEvent, nodeId: string) => {
    event.stopPropagation();
    onDelete(nodeId);
  };

  return (
    <div>
      <h2>User Nodes</h2>
      <ReactFlow nodes={nodes} edges={edges} onNodeClick={handleNodeClick}>
        {nodes.map((node) => (
          <div key={node.id} className="node">
            <p>{node.data.label}</p>
            <button onClick={(e) => handleNodeDelete(e, node.id)}>Delete</button>
          </div>
        ))}
      </ReactFlow>
    </div>
  );
};

export default NodeVisualization;
