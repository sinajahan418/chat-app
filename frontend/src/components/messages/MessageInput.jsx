import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="px-4 my-3 flex flex-row">
      <div className="w-full flex justify-between items-center gap-2">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full bg-zinc-900 p-2.5 border-gray-600 text-white"
          placeholder="Send a message"
        />
        <BsSend className=" text-2xl"/>
      </div>
    </form>
  );
};
export default MessageInput;
