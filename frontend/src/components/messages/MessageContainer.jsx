import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const selectMessage = false;
  return (
    <>
      {!selectMessage ? (
        <NoChatSelected />
      ) : (
        <div className="w-full flex flex-col">
          <>
            {/* Header */}
            <div className="bg-zinc-950 px-4 py-2 mb-2">
              <span className="label-text">To:</span>{" "}
              <span className="text-gray-600 font-bold">John doe</span>
            </div>

            <Messages />
            <MessageInput />
          </>
        </div>
      )}
    </>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  // const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 authUser.fullName ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
