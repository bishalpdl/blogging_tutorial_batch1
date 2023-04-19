import {
  AtSymbolIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import http from "../utils/http.utils";
import postLoginApi from "../service/postLoginApi";
import { toast } from "react-hot-toast";
import { setLoginInfo } from "../utils/storage.utils";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRememberMe, setIsRememberMe] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await postLoginApi({ data: { email, password } });
      if (res) {
        const token = res?.token;
        dispatch(setLogin({ token }));
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      toast.error(
        e?.response?.data?.message ||
          e?.message ||
          "Something went wrong. Please try agai later."
      );
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <div>
        <form onSubmit={handleSubmit}>
          <h1 className="text-lg text-gray-400 font-medium min-w-[250px]">
            Login
          </h1>
          <div className="mt-2">Email</div>
          <div className="flex items-center border border-gray-300 p-2 rounded-md">
            <AtSymbolIcon className="h-5" />
            <input
              type="text"
              className="pl-2 w-full outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mt-2">Password</div>
          <div className="flex items-center border border-gray-300 p-2 rounded-md">
            <input
              type={isPasswordShown ? "text" : "password"}
              className="pl-2 w-full outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {isPasswordShown ? (
              <EyeSlashIcon
                className="h-6"
                onClick={() => setIsPasswordShown(!isPasswordShown)}
              />
            ) : (
              <EyeIcon
                className="h-6"
                onClick={() => setIsPasswordShown(true)}
              />
            )}
          </div>
          <button
            type="submit"
            className="mt-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
