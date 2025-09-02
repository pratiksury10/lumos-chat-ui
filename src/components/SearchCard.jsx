import { Search } from "lucide-react";
import mic from "../assets/mic.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchCard = () => {
  const [query, setQuery] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (query.trim() !== "") {
  //     // navigate to next page
  //     navigate("/chat", { state: { query } });
  //   }
  // };

  
   //Whenever query changes, wait 1.5s then navigate
  useEffect(() => {
    if (!query.trim()) return;

    if (typingTimeout) clearTimeout(typingTimeout);

    const timeout = setTimeout(() => {
      navigate("/chat", { state: { query } });
    }, 1500);

    setTypingTimeout(timeout);

    return () => clearTimeout(timeout);
  }, [query, navigate]);

  const handleMicClick = () => {
    // For now mic click -> same redirect
    navigate("/chat", { state: { query: "Voice input example..." } });
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-[100px] flex flex-col gap-0.5">
      
      {/* Text Section (Card ke bahar upar) */}
      <div className="text-center mb-[50px]">
        <h1 className="font-poppins font-semibold text-[52px] leading-[100%] tracking-[0] text-center w-[727px] h-[78px] mx-auto text-black">
           Welcome to Oslo AI
        </h1>

        <p className="font-poppins font-medium text-[24px] leading-[100%] tracking-[0] text-center w-[727px] h-[36px] mx-auto mt-[10px] text-[#7F7BAF]">
            Who should we target today ?
        </p>
      </div>

      {/* Card (Sirf search + tags + button) */}
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        
        {/* Search Input */}
        {/* <div className="flex items-center w-full bg-gray-50 rounded-xl px-4 py-3 shadow-inner"> */}
        <div className="flex items-center w-full px-1 py-3">
          <Search className="text-gray-400 mr-3"/>
          <input
            type="text"
            placeholder="Tell us what you'd like or pick from one of the prompts suggested below..."
            className="flex-1 outline-none bg-transparent text-gray-700"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* <Mic className="text-gray-400 ml-3"/> */}
           <span className="bg-indigo-100 p-1 rounded-md  cursor-pointer" 
            onClick={handleMicClick}
           >
            <img src={mic} alt="Logo" className="w-[38px] h-[38px] p-1" />
            {/* <Mic className="text-indigo-600"/> */}
          </span>
        </div>

        {/* Tags + Button */}
        <div className="flex items-center justify-between w-full flex-wrap gap-4">
          <div className="flex gap-3 flex-wrap">
            <span className="px-4 py-2 bg-indigo-50 text-sm rounded-full">Tech Companies</span>
            <span className="px-4 py-2 bg-indigo-50 text-sm rounded-full">100+ Employees</span>
            <span className="px-4 py-2 bg-indigo-50 text-sm rounded-full">Operating from Mumbai</span>
          </div>
          <button className="px-6 py-2 bg-[#7280F5] text-white rounded-2xl shadow flex items-center gap-2 hover:bg-indigo-700 transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12"/>
            </svg>
            Import CSV
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;


