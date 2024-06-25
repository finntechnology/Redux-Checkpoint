import React from "react";
import ListTask from "../components/ListTask";
import AddTask from "../components/AddTask";
import TaskAddModal from "../components/TaskAddModal";
import TaskDisplayModal from "../components/TaskDisplayModal";
import CustomizedSnackbars from "../components/SnackBar";
import Navbar from "../components/Navbar";

const MainLayout = () => (
  <>
    <Navbar />
    <div className="max-w-2xl p-4 m-1 space-y-4 relative main--div w-full rounded-b-lg">
      <ListTask />
      <AddTask />
      <TaskDisplayModal />
      <TaskAddModal />
      <CustomizedSnackbars />
    </div>
  </>
);
export default MainLayout;
