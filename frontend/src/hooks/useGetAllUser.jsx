import { useState, useEffect } from "react";

const GetAllUser = () => {
  const [allUser, setAllUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const users = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/api/users");
        const data = await res.json();
        setAllUser(data);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    };
    users();
  }, []);
  return {
    allUser,
    loading,
    error,
  };
};

export default GetAllUser;
