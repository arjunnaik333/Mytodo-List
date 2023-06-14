import React, { useState, useEffect } from "react";
// import React, { useState, useEffect } from "react";
import "./MyList.css";
import addlst from "./images/add-square-svgrepo-com.svg";
import completeimg from "./images/tick-svgrepo-com.svg";

import deleteimg from "./images/x-square-svgrepo-com.svg";
import editimg from "./images/edit-svgrepo-com.svg";
import saveimg from "./images/upload-svgrepo-com.svg";
import cancelimg from "./images/x-circle-svgrepo-com.svg";

const MytodoList = () => {
  const [list, setList] = useState([]);

  const [inputs, setInput] = useState("");

  const [validation, setValidation] = useState(false);

  const [filterTextValue, setFilterTextValue] = useState("all");

  console.log(list, inputs);

  const filterTodoList = list.filter((list) => {
    if (filterTextValue === "complete") {
      return list.taskStatus === true;
    } else if (filterTextValue === "incomplete") {
      return list.taskStatus === false;
    } else {
      return list;
    }
  });

  // useEffect(() => {
  //   fetch("http://localhost:1337/api/todos").then((response) =>
  //     response.json()
  //   );
  // });

  const handleAdd = () => {
    if (inputs.length === 0) {
      setValidation(true);
    } else {
      //   const newList = { taskname: inputs, status: "incomplete" };
      const newList = {
        taskname: inputs,
        status: "incomplete",
        isedited: "false",
        editedValue: inputs,
      };

      const newarray = [...list, newList];
      //   const newarray = [...list];
      //   newarray.push(newList);
      setList(newarray);

      //   setList([...list].concat(newList));

      setInput("");
    }
  };

  const handleComplete = (e) => {
    const completeList = [...list];
    completeList[e].status = "complete";
    setList(completeList);
  };

  const handleDelete = (e) => {
    const deleteList = [...list].filter((i) => i.taskname !== e);
    setList(deleteList);
  };

  const handleEdit = (e) => {
    const editlist = [...list];
    editlist[e].isedited = "true";
    setList(editlist);
  };

  const editInput = (e, index) => {
    const editlist = [...list];
    editlist[index].editedValue = e;
    setList(editlist);
  };

  const handleCancel = (e) => {
    const editlist = [...list];
    editlist[e].isedited = "false";
    setList(editlist);
  };

  const handleSave = (e, value) => {
    const editlist = [...list];
    editlist[e].taskname = value;
    editlist[e].isedited = "false";
    setList(editlist);
  };

  const onFilterValueChanged = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="Main">
      <div className="Header">ToDo-List</div>
      <div className="inputwrap">
        <input
          value={inputs}
          onChange={(e) => {
            setInput(e.target.value);
            setValidation(false);
          }}
          type="text"
          placeholder="Enter a todo"
          className="input_todo"
        />
        <button
          onClick={() => {
            handleAdd();
          }}
          className="Add_button"
        >
          <img className="add_image" src={addlst} alt="addtast" />
        </button>{" "}
        &nbsp;
        <div className="filter_area">
          <select name="taskStatus" onChange={onFilterValueChanged}>
            <option value="all">All</option>
            <option value="Incomplete">Incomplete</option>
            <option value="Complete">Complete</option>
          </select>
        </div>
      </div>
      {validation ? <p className="line">Task can not be empty</p> : null}
      <div>
        {list.map((i, enm) => (
          <ul className="list_container">
            <li className="item_list">
              {i.taskname}
              <div className="button_container" key={enm}>
                {i.isedited === "true" ? (
                  <div>
                    <input
                      className="edit_input"
                      value={i.editedValue}
                      onChange={(e) => {
                        editInput(e.target.value, enm);
                      }}
                    />{" "}
                    <button
                      onClick={() => {
                        handleCancel(enm);
                      }}
                    >
                      <img
                        src={cancelimg}
                        className="cancel_task"
                        alt="Cancel"
                      />
                    </button>{" "}
                    <button
                      onClick={() => {
                        handleSave(enm, i.editedValue);
                      }}
                    >
                      <img src={saveimg} className="save_task" alt="Save" />
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => {
                        handleEdit(enm);
                      }}
                    >
                      <img src={editimg} className="edit_task" alt="Edit" />
                    </button>{" "}
                    {i.status === "incomplete" ? (
                      <button
                        onClick={() => {
                          handleComplete(enm);
                        }}
                        className="Complete_button"
                      >
                        <img
                          src={completeimg}
                          className="complete_task"
                          alt="Completed"
                        />
                      </button>
                    ) : null}{" "}
                    <button
                      onClick={() => {
                        handleDelete(i.taskname);
                      }}
                    >
                      <img
                        src={deleteimg}
                        className="delete_task"
                        alt="Delete"
                      />
                    </button>{" "}
                  </div>
                )}
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default MytodoList;
