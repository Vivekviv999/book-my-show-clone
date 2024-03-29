import React, { useContext } from 'react'
import { BiChevronDown, BiMenu, BiSearch, BiSearchAlt, BiShareAlt } from "react-icons/bi";
// import { MovieContext } from '../../context/Movie.context';

// const NavSm  = () =>  {
//   const {movie} = useContext(MovieContext);
//   return (
//     <>
//      <div className='text-gray-700 flex items-center justify-between'>
//       <div>
//         <h3 className='text-xl font-bold '>{movie.original_title}</h3>
//       </div>
//      </div>
//      <div className="w-8 h-8">
//           <BiShareAlt className="w-full h-full" />
//         </div>


//     </>
//   )
// }

function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Hyderabad <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <h3 className="text-gary-400">Use App</h3>
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
      <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
        <BiSearch />
        <input
          type="search"
          className="w-full bg-transparent border-none focus:outline-none"
        />
      </div>
    </>
  );
}

function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white ">
            Hyderabad <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign In
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

const MovieNavbar = () => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">
    {/* Mobile Screen Navbar */}
    <div className="md:hidden">
      <NavSm />
    </div>
    {/* Medium Screen Size */}
    <div className="hidden md:flex lg:hidden">
      <NavMd />
    </div>
    {/* Large Screen Size */}
    <div className="hidden md:hidden lg:flex">
      <NavLg />
    </div>
  </nav>
);
};


  
  


export default MovieNavbar