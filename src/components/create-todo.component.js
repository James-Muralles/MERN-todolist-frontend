import React, {useState} from "react";
import axios from 'axios';

const CreateTodo = ({ match: { params }, history }) =>{

    const [todo_Description, setTodo_Description] = useState("");
    const [todo_Responsibility, setTodo_Responsibility] = useState("");
    const [todo_Priority, setTodo_Priority] = useState("");
    const [todo_completed, setTodo_completed] = useState(false);


const onChangeTodoDescription = (e) =>{
setTodo_Description(e.target.value)
    };

const onChangeTodoResponsibility = (e) =>{
setTodo_Responsibility(e.target.value)
    };

const onChangeTodoPriority = (e) =>{
setTodo_Priority(e.target.value)
    };

const onSubmit = (e) => {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${todo_Description}`);
        console.log(`Todo Responsible: ${todo_Responsibility}`);
        console.log(`Todo Priority: ${todo_Priority}`);

    const newTodo = {
        todo_description: todo_Description,
        todo_responsible: todo_Responsibility,
        todo_priority: todo_Priority,
        todo_completed: todo_completed
    };

    axios.post('http://localhost:1337/api/todos', newTodo)
        .then(res => console.log(res.data))
        .then(() => history.push("/"));
        setTodo_Responsibility("");
        setTodo_Description("");
        setTodo_Priority("");
        setTodo_completed(false)
    };



    return (
        <div style={{marginTop: 10}}>
            <h3>Create New Todo</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Description: </label>
                    <input  type="text"
                            className="form-control"
                            value={todo_Description}
                            onChange={onChangeTodoDescription}
                    />
                </div>
                <div className="form-group">
                    <label>Responsible: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={todo_Responsibility}
                        onChange={onChangeTodoResponsibility}
                    />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={todo_Priority==='Low'}
                                onChange={onChangeTodoPriority}
                        />
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Medium"
                                checked={todo_Priority==='Medium'}
                                onChange={onChangeTodoPriority}
                        />
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="High"
                                checked={todo_Priority==='High'}
                                onChange={onChangeTodoPriority}
                        />
                        <label className="form-check-label">High</label>
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Todo" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
};
export default CreateTodo;
