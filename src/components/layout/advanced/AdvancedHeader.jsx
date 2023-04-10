import { NavLink, Outlet } from 'react-router-dom'
function AdvancedHeader() {
  let linkClass = 'cursor-pointer py-1 px-2 bg-gray-100 hover:opacity-75'
  return (
    <div className="space-y-2">
      <div className="flex space-x-6 items-center">
        <div>Advanced Movies Dist.</div>
        <div className="flex-auto flex space-x-2 items-center">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-green-500 ' + linkClass : linkClass
            }
            end
            // this end attribute is used to tell not to make this movies as active for the urls movies/*
            to="/advanced-layout/movies"
          >
            Movies
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-green-500 ' + linkClass : linkClass
            }
            to="/advanced-layout/movies/1"
          >
            Movie 1
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-green-500 ' + linkClass : linkClass
            }
            to="/advanced-layout/movies/new"
          >
            New Movie
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-green-500 ' + linkClass : linkClass
            }
            to="/advanced-layout/movies/favorite"
          >
            Favorite Movies
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-green-500 ' + linkClass : linkClass
            }
            to="/advanced-layout/movies/genres"
          >
            Genres
          </NavLink>
        </div>
      </div>

      {/* here you can see the outlet.....like the router-view in vue router  */}
      <Outlet />
    </div>
  )
}

export default AdvancedHeader
