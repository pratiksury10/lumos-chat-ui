import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
import SearchCard from "../components/SearchCard";

const Dashboard = () => {
  return (
    // <div className="flex bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen">
    <div className="flex h-screen w-full opacity-100 border-[1.6px] backdrop-blur-[33px] overflow-hidden"
  style={{
    background: "linear-gradient(102.91deg, #FFFDFF -13.78%, #EBEEFF 100%)",}}>
      <Sidebar />
      <div className="flex-1">
        {/* <Navbar /> */}
        <div className="flex flex-col items-center justify-center mt-10">
          <SearchCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
