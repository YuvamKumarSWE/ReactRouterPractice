import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>Not Found</h1>
            <Link to="/">Go back home</Link>

        </div>
    );
}