const Navbar = () => {
    return (
      <nav className="w-full bg-[#6669FE] py-4 px-12 flex items-center justify-between">

        <div className="text-lg font-semibold">
          <img src="./student_portal_logo.png" alt="Logo" className="h-10 w-auto" />
        </div>
  
        <h1 className="text-3xl font-bold">Student Portal</h1>
  
        <div className="hidden sm:flex sm:flex-col text-right">
          <span className="text-2xl font-bold">Hello, Gabrisa!</span>
          <span className="text-sm text-white">Class 7, Math + Science</span>
        </div>
      </nav>
    );
  }

  export default Navbar