import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    setLoading(false)
    if (res.status == 200) {
      setUsername("");
      setPassword("");
    }
    console.log("res==>>>>>>", res);
  };
  return (
    <div className="w-[300px] p-5 bg-black shadow-xl rounded-2xl">
      <form onSubmit={(e) => e.preventDefault()} className=" flex flex-col">
        <div className="px-4 flex flex-col gap-2">
          <label htmlFor="">username</label>
          <div className=" flex items-center justify-between ">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="username"
              required
              className="px-2 text-white p-1 bg-zinc-950 rounded-2xl shadow-lg"
            />
            <CiUser className=" text-2xl" />
          </div>
        </div>
        <div className="px-4 flex flex-col gap-2">
          <label htmlFor="">password</label>
          <div className=" flex items-center justify-between ">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              required
              className="px-2 text-white p-1 bg-zinc-950 rounded-2xl shadow-lg"
            />
            <RiLockPasswordLine className=" text-2xl" />
          </div>
        </div>
        <div className="flex gap-2 p-4 text-gray-600">
          <p>dont have accont?</p>
          <a href="/Signup">Signup</a>
        </div>
        {loading ? (
          <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
          </button>
        ) : (
          <button onClick={handleLogin} className="btn btn-block">
            Login
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
