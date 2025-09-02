import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar1 from "../components/Sidebar1";
import CircleDot from "../components/CircleDot";
import chatbg from "../assets/chatbg.svg";
import avatarchat from "../assets/avatarchat.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ChatPage = () => {

  const location = useLocation();
  const initialQuery = location.state?.query || "";

  const [mode, setMode] = useState("ai"); // ai | search
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    { sender: "oslo", text: "Hello I’m Oslo. Tell me what’s on your mind" },
  ]);

  const messagesEndRef = useRef(null);

  // Auto scroll effect
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  //  useEffect(() => {
  //   if (initialQuery) {
  //     setMessages((prev) => [...prev, { sender: "user", text: initialQuery }]);
  //   }
  // }, [initialQuery]);

  // 🔹 Dummy replies
  const getDummyAIResponse = (query) => {
    return `Oslo AI soch raha hai: "${query}" ka jawab abhi main dummy data se de raha hoon!`;
  };

  const getDummySearchResponse = (query) => {
    return `Top results for "${query}":\n- Dummy Result 1\n- Dummy Result 2\n- Dummy Result 3`;
  };

  return (
    <div
      className="flex h-screen w-full opacity-100 border-[1.6px] backdrop-blur-[33px] overflow-hidden"
      style={{
        background: "linear-gradient(102.91deg, #FFFDFF -13.78%, #EBEEFF 100%)",
      }}
    >
      <Sidebar1 />

      <div className="flex flex-col flex-1 mt-[10px] mb-[10px]">
        {/* 🔹 Navbar */}
        <div className="h-[60px] flex items-center justify-between px-6 border-b bg-white">
          <button className="px-6 py-2 h-[36px] bg-white border border-[#E3E7F1] rounded-lg text-gray-600 hover:bg-gray-300 transition shadow flex items-center">
            <ChevronLeft className="w-4 h-4 text-white-600" />
            Exit
          </button>

          {/* Stepper */}
          <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
            <span>
              <CircleDot />
            </span>
            <span className="text-indigo-600">ICP</span>
            <ChevronRight className="w-4 h-4 text-indigo-600" />
            <span>
              <CircleDot />
            </span>
            <span>Touchpoints</span>
            <ChevronRight className="w-4 h-4 text-indigo-600" />
            <span>
              <CircleDot />
            </span>
            <span>Pitch</span>
            <ChevronRight className="w-4 h-4 text-indigo-600" />
            <span>
              <CircleDot />
            </span>
            <span>Setup</span>
          </div>

          <div className="w-[50px]"></div>
        </div>

        {/* 🔹 Main Content */}
        <div className="h-[00px] flex flex-1 ">
          {/* Left chat section */}
          <div
            className="flex-1 p-6 bg-cover bg-center flex flex-col h-full overflow-hidden"
            style={{ backgroundImage: `url(${chatbg})` }}
          >
            <h2 className="text-3xl text-center font-semibold mb-4">Oslo chat</h2>

            {/* Messages (Scrollable area) */}
            <div className="flex-1 overflow-hidden pr-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {/* Oslo messages → avatar + bubble */}
                  {/* Oslo messages → avatar + bubble */}
                  {msg.sender === "oslo" && (
                    <div className="flex items-start relative">
                      {/* Avatar fixed position */}
                      <div className="flex-shrink-0">
                        <img
                          src={avatarchat}
                          alt="avatarchat"
                          className="w-[265px] h-[240px] rounded-full"
                        />
                      </div>

                      {/* Chat bubble */}
                      <div className="p-x-4 mt-[12px] ml-[-120px] max-w-[70%] bg-transparent text-gray-900 text-0.5lg">
                        {msg.text}
                      </div>
                    </div>
                  )}

                  {/* User messages → only bubble */}
                  {msg.sender === "user" && (
                    <div className="p-2 rounded-lg h-[40px] mt-[-120px] shadow max-w-[70%] bg-indigo-100 text-gray-800">
                      {msg.text}
                    </div>
                  )}
                </div>
              ))}

              {/* anchor for auto-scroll */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Box → Always at bottom */}
            <div className="sticky bottom-0 left-0 w-full bg-white border-t px-4 py-2 shadow flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 outline-none bg-transparent"
              />
              <button
                onClick={() => {
                  if (!input.trim()) return;

                  // Add user message
                  setMessages((prev) => [...prev, { sender: "user", text: input }]);
                  const userQuery = input;
                  setInput("");

                  // Dummy response
                  let reply =
                    mode === "ai"
                      ? getDummyAIResponse(userQuery)
                      : getDummySearchResponse(userQuery);

                  setTimeout(() => {
                    setMessages((prev) => [...prev, { sender: "oslo", text: reply }]);
                  }, 500);
                }}
                className="text-indigo-500 font-semibold"
              >
                Send
              </button>
              <button className="ml-2 text-indigo-500">🎤</button>
            </div>
          </div>

          {/* Right side form */}
          <div className="w-[630px] bg-white p-6 border-l overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">
              Let’s define your targets
            </h3>
            <p className="text-gray-500 mb-6">
              Focus on the most relevant fields to shape your ICP — all fields are optional
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Company Headcount</label>
                <select className="w-full border rounded-lg p-2">
                  <option>1-10</option>
                  <option>10-50</option>
                  <option>50+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Company HQ Locations</label>
                <select className="w-full border rounded-lg p-2">
                  <option>India</option>
                  <option>US</option>
                  <option>Europe</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Revenue range</label>
                <select className="w-full border rounded-lg p-2">
                  <option>50L - 1Cr</option>
                  <option>1Cr - 10Cr</option>
                  <option>10Cr+</option>
                </select>
              </div>

               {/* Advanced Filters */}
              <div className="space-y-4 overflow-y-hidden">
                <h4 className="text-md font-semibold mb-2">Advanced Filters</h4>

                <div>
                  <label className="block text-sm mb-1">Company name</label>
                  <select className="w-full border rounded-lg p-2">
                    <option>Search department...</option>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Tech</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">Company names to exclude</label>
                  <select className="w-full border rounded-lg p-2">
                    <option>Select job title...</option>
                    <option>Manager</option>
                    <option>Director</option>
                    <option>VP</option>
                  </select>
                </div>
              </div>
              <button className="w-[200px] ml-[380px] bg-indigo-500 text-white py-2 rounded-lg shadow hover:bg-indigo-600">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;





