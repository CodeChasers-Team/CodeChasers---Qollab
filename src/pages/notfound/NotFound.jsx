import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="w-full h-screen justify-center items-center">
      <h1>hot fout page</h1>
      <Link to="/">BACK TO HOME</Link>
    </div>
  );
};
export default NotFoundPage;
