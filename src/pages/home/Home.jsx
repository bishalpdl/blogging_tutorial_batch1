import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetLogin } from "../../redux/slices/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] ">
      HomePage
      <button
        className="px-3 py-2 bg-blue-400 rounded-md text-white"
        onClick={() => {
          dispatch(resetLogin());
          navigate("/login");
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default Home;
