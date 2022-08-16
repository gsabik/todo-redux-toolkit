import { Link } from "react-router-dom"

const NothingToDo = () => {
    return (
        <div className="h-full flex justify-center items-center text-white">
            <div className="flex flex-col space-y-4">
                <h3 className="text-xl">You have nothing to do!</h3>
                <Link className="text-center rounded-md bg-violet-600 py-2" to="/">Create to do</Link>
            </div>
        </div>
    )
}

export default NothingToDo