const LeftDashboard = () => {
    return (
      <div className="space-y-8">
        {/* Announcements Section */}
        <div>
          <h2 className="text-xl text-black font-bold mb-4">Announcements</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              {["On account of Independence Day, August 15th will be a holiday.", "Reminder to finish your assignments and submit them by Monday."].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <img src="/announcement-icon.png" alt="Announcement" className="h-8 w-8 mr-4" />
                  <p className="text-sm text-gray-700"> {item} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Class Schedule Section */}
        <div>
          <h2 className="text-xl text-black font-bold mb-4">Your Class Schedule</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <img src="/schedule-icon.png" alt="Schedule" className="h-8 w-8 mr-4" />
                  <p className="text-sm text-gray-700">Class {item} details here.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default LeftDashboard;