const RightDashboard = () => {
    return (
      <div className="space-y-8">
        <h2 className="text-xl text-black font-bold mb-4">Access Class Recordings</h2>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search for class recordings"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
  
          {/* Filter Options */}
          <div className="flex space-x-4 mb-6">
            <select className="p-2 border border-gray-300 rounded-lg">
              <option>This Week</option>
              <option>Last Week</option>
            </select>
            <select className="p-2 border border-gray-300 rounded-lg">
              <option>All Subjects</option>
              <option>Subject 1</option>
            </select>
          </div>
  
          {/* Recording Cards */}
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                <div>
                  <h3 className="text-lg font-semibold">Class {item} Recording</h3>
                  <p className="text-sm text-gray-500">Subheading {item}</p>
                  <p className="text-xs text-gray-400">Date: 2024-10-24</p>
                </div>
                <img src="/recording-icon.png" alt="Recording" className="h-12 w-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default RightDashboard