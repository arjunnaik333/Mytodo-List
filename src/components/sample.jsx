import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
import "./MyList.css";

const MytodoList = () => {
  const [list, setList] = useState([]);

  const [inputs, setInput] = useState("");

  const [validation, setValidation] = useState(false);

  console.log(list, inputs);

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
      //   newarray.push(newList);

      setList(newarray);
      setInput("");
    }
  };

  const handleComplete = (e) => {
    const completeList = [...list];
    completeList[e].status = "complete";
    setList(completeList);
  };

  const handleDelete = (e) => {
    const deleteList = list.filter((i) => i.taskname !== e);
    setList(deleteList);
  };

  const handleEdit = (enm) => {
    const editlist = [...list];
    editlist[enm].isedited = "true";
    setList(editlist);
  };

  const editInput = (e, enm) => {
    const editlist = [...list];
    editlist[enm].isedited = e;
    setList(editlist);
  };

  return (
    <div className="Main">
      <div className="Header">ToDo-List</div>
      <div>
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
          Add
        </button>
        {validation ? <p className="line">Task can not be empty</p> : null}
      </div>

      <div>
        {list.map((i, enm) => (
          <ul className="list_container">
            <li className="item_list">
              {i.taskname}
              <div className="button_container">
                {i.isedited === "true" ? (
                  <div className="edit_main">
                    <input
                      value={i.editedValue}
                      onChange={(e) => {
                        editInput(e.target.value, enm);
                      }}
                    />

                    <button>Cancel</button>
                    <button>Save</button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      handleEdit(enm);
                    }}
                  >
                    Edit
                  </button>
                )}
                {i.status === "incomplete" ? (
                  <button
                    onClick={() => {
                      handleComplete(enm);
                    }}
                    className="Complete_button"
                  >
                    Completed
                  </button>
                ) : null}
                <button
                  onClick={() => {
                    handleDelete(i.taskname);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default MytodoList;
