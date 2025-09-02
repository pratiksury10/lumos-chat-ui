import { Home, Rocket, FileText, Users, Mail, Settings, LogOut, Activity } from "lucide-react";
// import { ReactComponent as Logo } from "../assets/logo.svg";
import photo from "../assets/photo.svg";
import logo from "../assets/logo.svg";
import name from "../assets/name.svg";

const Sidebar = () => {
  // Common class for all nav items
  const navItemClasses =
    "flex items-center gap-[28px] w-[250px] h-[51px] mt-[-50px] rounded-[12px] " +
    "px-[16px] py-[12px] text-gray-600 hover:text-indigo hover:bg-[#F7F7FF] opacity-100";

  return (
    <div
      className="h-screen w-[290px] bg-white shadow-lg flex flex-col 
                 opacity-100 rounded-tr-[28px] rounded-br-[28px]"
    >
      {/* Logo */}
        <div className="flex items-center justify-center mb-8">
        <img src={logo} alt="Logo" className="w-[120px] mt-[20px] mr-[80px] h-auto" />
      </div>

      <div className="flex flex-col items-center justify-center mb-16 mt-[-20px]">
        {/* User Photo */}
        <img src={photo} alt="photo" className="w-[60px] h-[50px] mr-[150px] rounded-full object-cover" />

        {/* User Name */}
        <p className="text-[16px] font-medium font-poppins leading-[100%] text-[#2F2357] text-center w-[126px] h-[24px] mt-[-50px]">
          John Doe
        </p>

        {/* User Email */}
        <p className="text-[12px] font-normal font-poppins leading-[100%] text-[#9E98B0] text-center w-[126px] h-[18px] mt-[5px] ml-[50px]">
          john.doe@gmail.com
        </p>
      </div>

      {/* <Logo className="w-32 h-auto" /> */}
      {/* <div className="p-6"> <Logo /> </div> */}

      {/* <div className="p-6 text-xl font-bold text-indigo-600">Zi Cloud</div> */}

      {/* Nav Links */}
      <nav className="flex-1 space-y-0.5 px-6">
        <a href="#" className={`${navItemClasses} text-indigo-600 font-medium`}>
          <Home size={20} /> Home
        </a>

        <a href="#" className={navItemClasses}>
          <Rocket size={20} /> Campaigns
        </a>

        <a href="#" className={navItemClasses}>
          <FileText size={20} /> Drafts
        </a>

        <a href="#" className={navItemClasses}>
          <Users size={20} /> Prospects
        </a>

        <a href="#" className={navItemClasses}>
          <Activity size={20} /> Analytics
        </a>

        <a href="#" className={navItemClasses}>
          <Mail size={20} /> Mailbox
        </a>
      </nav>

      {/* Footer Links */}
      <div className="mt-auto px-6 space-y-0.5 pb-2">
        {/* <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-indigo-600"> */}
         <a href="#" className={navItemClasses}>
          <Settings size={20} /> Settings
        </a>
        {/* <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-red-600"> */}
         <a href="#" className={navItemClasses}>
          <LogOut size={20} /> Log out
        </a>
      </div>
    </div>
  );
};

export default Sidebar;



