const LeftDashboard = () => {
    return (
      <div className="space-y-8">
        {/* Announcements Section */}
        <div>
          <h2 className="text-xl text-black font-bold mb-4">Announcements</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              {["On account of Independence Day, August 15th will be a holiday.", "Reminder to finish your assignments and submit them by Monday."].map((item, idx) => (
                <div key={idx} className="flex items-center bg-[#F8F8F8] px-6 pt-2 rounded-lg">
                  <img src="./sun.png" alt="Announcement" className="h-8 w-8 mr-4" />
                  <p className="text-sm text-[#4749B3]"> {item} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
     {/* Class Schedule Section */}
<div>
  <h2 className="text-xl text-black font-bold mb-4">Your Class Schedule</h2>
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="space-y-4">
    
      {[
        { title: 'Class 7, Science | Live Class', subheading: 'Tuesday, 5:00 - 5:50 PM', rightSubheading: 'Yesterday', bgColor: '#F2F2FF', textColor: '#4749B3' }, // Light blue bg, dark blue text
        { title: 'Class 7, Science | Live Class', subheading: 'Tuesday, 6:30 - 7:15 PM', rightSubheading: 'Today', bgColor: '#E66DFF', textColor: '#FFFFFF' }, // Light green bg, dark green text
        { title: 'Class 7, Science | Live Class', subheading: 'Tuesday, 5:00 - 5:50 PM', rightSubheading: 'Tomorrow', bgColor: '#F2F2FF', textColor: '#4749B3' }, // Light yellow bg, dark yellow text
        { title: 'Class 7, Science | Live Class', subheading: 'Tuesday, 5:00 - 5:50 PM', rightSubheading: '23rd Sept. 2024', bgColor: '#FDF5FF', textColor: '#E66DFF' }, // Light red bg, dark red text
      ].map((classInfo, idx) => (
        <div
          key={idx}
          className={`flex items-center justify-between p-4 rounded-lg shadow-md`}
          style={{ backgroundColor: classInfo.bgColor }} 
        >

          <div className="flex items-center">
            <img src="./VideoLogo.png" alt="Schedule" className="h-8 w-8 mr-4" />
            <div>
              <h3 className="text-md font-semibold" style={{ color: classInfo.textColor }}>{classInfo.title}</h3> {/* Apply text color */}
              <p className="text-sm" style={{ color: classInfo.textColor }}>{classInfo.subheading}</p> {/* Apply text color */}
            </div>
          </div>

       
          <p className="text-sm" style={{ color: classInfo.textColor }}>{classInfo.rightSubheading}</p> {/* Apply text color */}
        </div>
      ))}
    </div>
  </div>
</div>


      </div>
    );
  }
  
  export default LeftDashboard;