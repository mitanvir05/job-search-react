import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1>Found Error !!!!!!!!</h1>
            <Link className="btn btn-primary mx-1 my-1" to ="/">Back Home</Link>
        </div>
    );
};

export default ErrorPage;