import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../redux/states/todoSlice";
import { v4 as uuid } from "uuid";

const TodoForm = () => {
    const [todo, setTodo] = useState({
        title: "",
        description: "",
    });

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const params = useParams();

    const todos = useSelector(state => state.todos)

    const handleChange = (e) => {

        setTodo({
            ...todo, 
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(params.id) {
            dispatch(updateTodo(todo));
        }

        else{
            dispatch(addTodo({
                ...todo, 
                id: uuid(),
            }));

        }

        navigate("/list");
    }

    useEffect(() => {
        if(params.id) {
            setTodo(todos.find((todo) => todo.id === params.id));
        }

    }, [params, todos])

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="flex flex-col space-y-4">
                <h1 className="text-3xl">What do you have to do?</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-4">
                        <input
                            className="p-2 rounded-md bg-gray-700 placeholder:text-white"
                            name="title"
                            onChange={handleChange}
                            placeholder="Title"
                            type="text"
                            value={todo.title}
                        />
                        <textarea
                            className="p-2 rounded-md bg-gray-700 placeholder:text-white"
                            name="description"
                            onChange={handleChange}
                            placeholder="Description"
                            rows={6}
                            type="text"
                            value={todo.description}
                        ></textarea>
                        <button className="rounded-md bg-violet-600 py-2">Save</button>
                    </div>
                </form>
                {
                    params.id && <p className="text-center text-violet-600">Editing</p>
                }
                <Link
                    className="font-semibold text-center" 
                    to="/list"
                >I have to do the following</Link>
            </div>
        </div>
    )
}

export default TodoForm