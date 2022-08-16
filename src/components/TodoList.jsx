import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../redux/states/todoSlice";
import NothingToDo from "./NothingToDo";

const TodoList = () => {
    const todos = useSelector(state => state.todos);

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    return (
        <div className="h-full py-10">
            {
                todos.length === 0
                ?
                <NothingToDo/>
                :
                <div className="h-full flex flex-col justify-center items-center space-y-4">
                    <div className="flex flex-row items-center justify-between w-4/6">
                        <h3 className="text-xl font-semibold">Todo {todos.length}</h3>
                        <Link className="text-center rounded-md bg-violet-600 py-2 w-32" to="/">Create to do</Link>
                    </div>
                    <div className="flex flex-col pr-2 overflow-y-auto w-4/6">
                        {
                            todos.map(({ id, title, description }) => (
                                <div key={id} className="flex flex-col py-4 w-full">
                                    <div className="w-full p-4 rounded-md space-y-2 bg-gray-700">
                                        <h3 className="text-lg font-medium">{title}</h3>
                                        <p>{description}</p>
                                        <div className="flex flex-row space-x-4 pt-2">
                                            <button className="text-sm p-2 rounded-md border-2 w-16" onClick={() => handleDelete(id)}>Delete</button>
                                            <Link to={`/edit-todo/${id}`} className="text-sm text-center text-black p-2 rounded-md bg-white w-16">Edit</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>   
                </div>

            }
        </div>
    )
}

export default TodoList