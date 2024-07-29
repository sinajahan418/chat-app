import GetAllUser from "../../hooks/useGetAllUser";
import Conversation from "./Conversation";

const Conversations = () => {
  const { allUser, loading, error } = GetAllUser();
  console.log("eeeeeeeeeeeeeerer", error);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading && (
        <button className="btn">
          <span className="loading loading-spinner"></span>
          loading
        </button>
      )}
      {!error && <>some thing bad bad hapeing to me</>}
      {/* {allUser.length == 0
        ? ""
        : allUser.map((user, index) => (
            <Conversation key={index} user={user} />
          ))} */}
    </div>
  );
};
export default Conversations;
