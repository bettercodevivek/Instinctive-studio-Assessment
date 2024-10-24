const RightDashboard = () => {
    return (
      <div className="space-y-8">
        <h2 className="text-2xl text-black font-bold">Access Class Recordings</h2>
        <div className="bg-white py-6 px-6 rounded-2xl shadow-md">
          {/* Search Bar */}
          <div className="mb-6 flex items-center border border-gray-300 rounded-lg bg-[#4749B30D]">
            {/* Search Icon */}
            <img src="./search-normal.png" alt="Search" className="h-5 w-5 ml-2" />
  
            {/* Input Field */}
            <input
              type="text"
              placeholder="Search for class recordings"
              className="w-full p-2 border-none rounded-lg focus:outline-none bg-[#4749B30D]"
            />
          </div>
  
          {/* Filter Section */}
          <div className="flex justify-between items-center mb-6 text-[#979797]">
            <p className="text-[#979797]">Filter by:</p>
            <div className="flex space-x-4">
              <select className="p-2 border border-gray-300 rounded-lg">
                <option>This Week</option>
                <option>Last Week</option>
              </select>
              <select className="p-2 border border-gray-300 rounded-lg">
                <option>All Subjects</option>
                <option>Subject 1</option>
              </select>
            </div>
          </div>
  
          {/* Recording Cards */}
          <div className="space-y-4">
            {[
              {
                title: 'Class 7 Math',
                subheading: 'Algebraic Equations',
                textColor: '#4749B3',
                image: './Mask group.png', // Unique image for each card
              },
              {
                title: 'Class 7 Math',
                subheading: 'Inert Gases',
                textColor: '#FFFFFF',
                image: './Mask group.png',
              },
              {
                title: 'Class 7 Science',
                subheading: 'Fundamentals of Organic Chemistry',
                textColor: '#4749B3',
                image: './Mask-group2.png',
              },
              {
                title: 'Class 7 Math',
                subheading: 'Trigonometry 101',
                textColor: '#E66DFF',
                image: './Mask group.png',
              },
            ].map((item, idx) => (
              <div key={idx}>
                {/* Recording Card */}
                <div
                  className="flex justify-between items-center p-4 rounded-lg shadow-sm"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <div>
                    <h3 className="text-sm font-medium" style={{ color: item.textColor }}>
                      {item.title}
                    </h3>
                    <p className="text-lg font-bold text-black">{item.subheading}</p>
                    <p className="text-xs font-normal text-[#727272]">24th October, 2024</p>
                  </div>
                  <img src={item.image} alt="Recording" className="h-12 w-20" />
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default RightDashboard;
  