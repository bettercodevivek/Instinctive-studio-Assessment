const RightDashboard = () => {
    return (
      <div className="space-y-8">
        <h2 className="text-2xl text-black font-bold">Access Class Recordings</h2>
        <div className="bg-white py-6 px-12 rounded-2xl shadow-md">
          {/* Search Bar */}
<div className="mb-6 flex items-center border border-gray-300 rounded-lg">
  {/* Search Icon */}
  <img src="./search-normal.png" alt="Search" className="h-5 w-5 ml-2" />
  
  {/* Input Field */}
  <input
    type="text"
    placeholder="Search for class recordings"
    className="w-full p-2 border-none rounded-lg focus:outline-none"
  />
</div>

  
          {/* Filter Options */}
          <div className="flex space-x-4 mb-6 text-[#979797]">
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
            {[
        { title: 'Class 7 Math', subheading: 'Algebraic Equations ',  bgColor: '#F2F2FF', textColor: '#4749B3' }, // Light blue bg, dark blue text
        { title: 'Class 7 Math', subheading: 'Inert Gases', bgColor: '#E66DFF', textColor: '#FFFFFF' }, // Light green bg, dark green text
        { title: 'Class 7 Science', subheading: 'Fundamentals of Organic Chemistry',  bgColor: '#F2F2FF', textColor: '#4749B3' }, // Light yellow bg, dark yellow text
        { title: 'Class 7 Math', subheading: 'Trigonometry 101', bgColor: '#FDF5FF', textColor: '#E66DFF' }, // Light red bg, dark red text
      ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                <div>
                  <h3 className="text-lg font-semibold text-[#4749B3]">{item.title}</h3>
                  <p className="text-sm text-black">{item.subheading}</p>
                  <p className="text-xs text-[#727272]">24th October, 2024</p>
                </div>
                <img src="./Mask group.png" alt="Recording" className="h-12 w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default RightDashboard