import React from "react";
import NodeVisualization from "./components/NodeVisualization";
import { ReactFlowProvider } from "react-flow-renderer";
import UserForm from "./components/UserForm";
import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <Provider store={store}>
       <ReactFlowProvider>

      <div className="app-container">
        <header className="app-header">
          <h1>User Management System</h1>
        </header>
        <main className="app-main">
          <section className="app-sidebar">
            <Sidebar />
          </section>
          <section className="app-content">
            <div className="form-container">
              <UserForm />
            </div>
            <div className="visualization-container">
              <h2>User Visualization</h2>
              <NodeVisualization />
            </div>
          </section>
        </main>
      </div>
       </ReactFlowProvider>
       <ToastContainer />
    </Provider>
  );
};

export default App;
