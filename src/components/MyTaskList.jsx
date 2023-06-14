import react, { useState } from "react";
import "./MyList.css";

const MyTaskList = () => {
  const [list, setList] = useState([]);
  const [inputs, setInputs] = useState("");
  const [validation, setValidation] = useState(false);

  console.log(list, inputs);

  const handleAdd = (e) => {
    if (inputs.length === 0) {
      setValidation(true);
    } else {
      const newList = {
        taskname: inputs,
        status: "incomplete",
        isEdited: false,
        editedValue: inputs,
      };
      const newArray = [...list, newList];
      setList(newArray);
      setInputs("");
    }
  };

  const handleComplete = (e) => {
    const completeList = [...list];
    completeList[e].status = "complete";
    setList(completeList);
  };

  const handleEdit = (e) => {
    const editList = [...list];
    editList[e].isEdited = true;
    setList(editList);
  };

  const handleEditInput = (e, index) => {
    const editList = [...list];
    editList[index].editedValue = e;
    setList(editList);
  };

  const handleCancel = (e) => {
    const editList = [...list];
    editList[e].isEdited = false;
    setList(editList);
  };
  const handleSave = (e, value) => {
    const editList = [...list];
    editList[e].taskname = value;
    editList[e].isEdited = false;
    setList(editList);
  };

  const handleDelete = (e) => {
    const deleteList = [...list].filter((i) => i.taskname !== e);
    setList(deleteList);
  };

  function parent() {
    let x = "arjun";
    function child() {
      console.log(x);
    }
    child();
  }

  return (
    <div className="main">
      <div>
        <header>My Task-List</header>
        <input
          className="input_task"
          value={inputs}
          onChange={(event) => {
            setInputs(event.target.value);
            setValidation(false);
          }}
          type="text"
          placeholder="enter to do"
        />
        <button
          onClick={() => {
            handleAdd();
          }}
        >
          Add
        </button>
      </div>
      {validation ? <p>Task can not be empty</p> : null}
      {list.map((i, enm) => (
        <div className="task_main">
          <ul className="task_list">
            <li className="item_list">
              {i.taskname}
              {i.status === "incomplete" ? (
                <button
                  onClick={() => {
                    handleComplete(enm);
                  }}
                >
                  Completed
                </button>
              ) : null}
              {i.isEdited === true ? (
                <div>
                  <input
                    value={i.editedValue}
                    onChange={(e) => {
                      handleEditInput(e.target.value, enm);
                    }}
                  />
                  <button
                    onClick={() => {
                      handleCancel(enm);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      handleSave(enm, i.editedValue);
                    }}
                  >
                    Save
                  </button>
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
              <button
                onClick={() => {
                  handleDelete(i.taskname);
                }}
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MyTaskList;
