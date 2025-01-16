import React, { useEffect, useState } from "react";
import ReactFlow, { Node, Edge, ReactFlowProvider, useReactFlow } from "react-flow-renderer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchUsers } from "../services/api";
import { setUsers } from "../redux/slice";

const NodeVisualization: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  const hobbies = useSelector((state: RootState) => state.users.hobbies);

  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const { setNodes: updateNodes, setEdges: updateEdges } = useReactFlow();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        dispatch(setUsers(data));
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getUsers();
  }, [dispatch]);

  useEffect(() => {
    const newNodes = users.map((user) => ({
      id: user.id,
      data: {
        label: (
          <div>
            <strong>{user.username}</strong> <br /> {user.age} years
          </div>
        ),
      },
      position: { x: Math.random() * 500, y: Math.random() * 500 },
    }));
    setNodes(newNodes);

    const newEdges = users.flatMap((user) =>
      user.hobbies.map((hobbyId) => ({
        id: `e${user.id}-${hobbyId}`,
        source: user.id,
        target: hobbyId.toString(),
        animated: true,
      }))
    );
    setEdges(newEdges);
  }, [users]);

  const onDrop = (event: React.DragEvent) => {
    const hobbyId = event.dataTransfer.getData("hobbyId");
    const userId = event.target.id;

    if (hobbyId && userId) {
      const newEdge = {
        id: `e${userId}-${hobbyId}`,
        source: userId,
        target: hobbyId,
        animated: true,
      };

      const newNode = {
        id: hobbyId,
        data: {
          label: hobbies.find((hobby) => hobby.id.toString() === hobbyId)?.name,
        },
        position: { x: Math.random() * 500, y: Math.random() * 500 },
      };

      setNodes((prevNodes) => [...prevNodes, newNode]);
      setEdges((prevEdges) => [...prevEdges, newEdge]);
    }
  };

  return (
    <div style={{ height: "500px" }} onDrop={onDrop} onDragOver={(e) => e.preventDefault()}>
      <ReactFlowProvider>
        <ReactFlow nodes={nodes} edges={edges} />
      </ReactFlowProvider>
    </div>
  );
};

export default NodeVisualization;
