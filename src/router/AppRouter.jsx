import { Routes, Route } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList"

const AppRouter = () => {
    return (
        <div className="h-screen text-white bg-gray-900">
            <Routes>
                <Route path="/" element={<TodoForm/>}/>
                <Route path="/edit-todo/:id" element={<TodoForm/>}/>
                <Route path="/list" element={<TodoList/>}/>
            </Routes>
        </div>
        )
}

export default AppRouter