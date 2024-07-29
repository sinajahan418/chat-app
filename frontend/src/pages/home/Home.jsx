import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex w-full sm:mx-[5rem] bg-black text-gray-400 sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-clip-padding shadow-xl bg-opacity-[0.9]">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
