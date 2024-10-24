const Navbar = () => {
    return (
      <nav className="w-full bg-[#6669FE] p-4 flex items-center justify-between">

        <div className="text-lg font-semibold">
          <img src="./student_portal_logo.png" alt="Logo" className="h-10 w-auto" />
        </div>
  
        <h1 className="text-2xl font-bold">Student Portal</h1>
  
        <div className="flex flex-col text-right">
          <span className="text-lg font-semibold">Hello, Gabrisa</span>
          <span className="text-sm text-gray-500">Class 7, Math + Science</span>
        </div>
      </nav>
    );
  }

  export default Navbar