import { Bell } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-end items-center p-4 bg-transparent">
      <div className="relative mr-6">
        <Bell className="text-gray-600"/>
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">2</span>
      </div>
      <img 
        src="https://i.pravatar.cc/40" 
        alt="profile" 
        className="w-10 h-10 rounded-full"
      />
    </div>
  );
};

export default Navbar;
