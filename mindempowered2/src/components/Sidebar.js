const Sidebar = () => {
    return (
      <div className="w-64 bg-yellow-800 text-white h-screen flex flex-col p-5">
        <h2 className="text-xl font-bold mb-6">ME - VMP</h2>
        <nav>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300">
              📋 <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300">
              👥 <span>Members</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300">
              📅 <span>Events</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300">
              📝 <span>Profile</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300">
              💬 <span>Feedback</span>
            </li>
          </ul>
        </nav>
        <button className="mt-auto flex items-center space-x-2 bg-red-600 px-4 py-2 rounded text-white">
          🚪 <span>Logout</span>
        </button>
      </div>
    );
  };
  
  export default Sidebar;
  