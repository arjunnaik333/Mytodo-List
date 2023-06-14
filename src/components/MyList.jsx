import React, { useState, useEffect } from "react";
import "./MyList.css";

const MyList = () => {
  const [list, setList] = useState([]);

  const [inputs, setInput] = useState("");

  useEffect(() => {
    if (list.length !== 0) {
      const jjson = JSON.stringify(list);
      localStorage.setItem("list", jjson);
    }
  }, [list, list.length]);
  useEffect(() => {
    const www = JSON.parse(localStorage.getItem("list"));
    setList(www);
  }, []);

  const [validation, setValidation] = useState(false);

  console.log(list, inputs);

  const handleAdd = () => {
    if (inputs.length === 0) {
      setValidation(true);
    } else {
      //   const newList = { taskname: inputs, status: "incomplete", edit: "false" };

      const newList = {
        taskname: inputs,
        status: "incomplete",
        edit: "false",
        editedvalue: " ",
      };

      const newarray = [...list];

      newarray.push(newList);

      setList(newarray);
      setInput("");
    }
  };

  const handleDelete = (e) => {
    const deletedlist = list.filter((i) => i.taskname !== e);
    // console.log(duplist.filter((i)=>{i.taskname!==e}))
    console.log(deletedlist, e);
    setList(deletedlist);
  };

  const handleComplete = (e) => {
    const onelist = [...list];
    onelist[e].status = "complete";
    setList(onelist);

    console.log(onelist);
  };

  const handleEdited = (e) => {
    const editList = [...list];
    editList[e].edit = "true";
    setList(editList);
    console.log(editList);
  };

  const editinput = (e, index) => {
    const duplist = [...list];
    duplist[index].editedvalue = e;
    setList(duplist);
  };

  const handleSubmit = (e, val) => {
    const duplist = [...list];
    duplist[e].taskname = val;
    duplist[e].edit = false;
    setList(duplist);
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
      </div>
      {validation ? <p className="line">Task can not be empty</p> : null}
      <div>
        {list.map((i, enm) => (
          <ul className="list_container">
            <li className="item_list">
              {i.taskname}
              <div className="button_container">
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

                {i.edit === "false" ? (
                  <button
                    onClick={() => {
                      handleEdited(enm);
                    }}
                    className="edit_button"
                  >
                    Edit
                  </button>
                ) : (
                  <input
                    className="edit_input"
                    value={inputs}
                    onChange={(e) => {
                      setInput(e.target.value);
                    }}
                  />
                )}

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

export default MyList;
