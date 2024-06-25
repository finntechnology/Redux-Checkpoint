import Task from "./Task";
import { useSelector } from "react-redux";
import * as React from "react";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const ListTask = () => {
  const [pending, setPending] = useState("block");
  const [completed, setCompleted] = useState("block");
  const [value, setValue] = useState("all");

  const handleSectionDisplay = (e) => {
    setValue(e.target.value);
  };

  React.useEffect(() => {
    if (value === "completed") {
      setCompleted("block");
      setPending("none");
      return;
    }

    if (value === "pending") {
      setPending("block");
      setCompleted("none");
      return;
    }

    setPending("block");
    setCompleted("block");
  }, [value]);

  // to get current state from store
  const tasks = useSelector((state) => state.tasks);

  // for collapsing completed tasks
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="space-y-8 relative">
      {/* // filter element */}
      <Box sx={{ minWidth: 120, background: "white" }}>
        <FormControl fullWidth color="myPink" variant="filled">
          <InputLabel>Task Status</InputLabel>
          <Select
            label="Task Staus"
            onChange={handleSectionDisplay}
            defaultValue=""
          >
            <MenuItem value="all">Show All Tasks</MenuItem>
            <MenuItem value="pending">Show Only Pending Tasks</MenuItem>
            <MenuItem value="completed">Show Only Completed Tasks</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <section
        className="shadow-md shadow-[#5B1D1D4F] p-4"
        style={{ display: pending }}
      >
        <h2 className="font-black text-indigo-950 text-lg italic px-1 rounded-md  bg-rose-500 w-fit ">
          PENDING TASKS
        </h2>{" "}
        <br />
        <div className="flex flex-col gap-1">
          {/* return a section containing only un-checked items */}
          {tasks.map((item) => {
            if (!item.isDone) {
              return <Task key={item.id} {...item} />;
            }
          })}
        </div>
      </section>

      <section
        className={"shadow-md shadow-[#5B1D1D4F] px-4"}
        style={{ display: completed }}
      >
        <div
          onClick={handleClick}
          className="font-black text-indigo-950 text-lg italic px-1 rounded-md  bg-rose-500 w-fit cursor-pointer"
        >
          COMPLETED
          {open ? <ExpandLess /> : <ExpandMore />}
        </div>
        <br />
        <Collapse in={open} timeout="auto" unmountOnExit>
          {/* return a collapsible section containing only completed tasks */}
          <div className="flex flex-col gap-1">
            {tasks.map((item) => {
              if (item.isDone) {
                return <Task key={item.id} {...item} />;
              }
            })}
          </div>
        </Collapse>
      </section>
    </div>
  );
};

export default ListTask;
