import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const routes = [
    {
      path: "/",
      name: "Dashboard",
      icon: "ri-dashboard-fill",
    },
    {
      path: "/trending",
      name: "Trending",
      icon: "ri-fire-fill",
    },
    {
      path: "/popular",
      name: "Popular",
      icon: "ri-bard-fill",
    },
    {
      path: "/movies",
      name: "Movies",
      icon: "ri-movie-2-fill",
    },
    {
      path: "/tv-shows",
      name: "TV Shows",
      icon: "ri-tv-fill",
    },
    {
      path: "/people",
      name: "People",
      icon: "ri-team-fill",
    },
  ];

  const siteInfoRoutes = [
    {
      path: "/about",
      name: "About",
      icon: "ri-information-fill",
    },
    {
      path: "/contact",
      name: "Contact",
      icon: "ri-phone-fill",
    },
  ];

  return (
    <div className="w-[20%] h-full text-white border-r-2 p-10 border-zinc-400">
      <h1 className="flex items-center gap-1 text-2xl font-bold">
        <i className="ri-tv-fill text-secondary"></i>{" "}
        <span className="">Cast Aura</span>
      </h1>

      <nav className="text-zinc-400 text-lg">
        <h1 className="mt-10 mb-5 font-semibold text-white">New Feeds</h1>

        <ul className="flex flex-col">
          {routes.map((route, index) => (
            <NavLink
              key={index}
              to={route.path}
              className="flex items-center gap-3 text-lg hover:bg-secondary hover:text-white rounded-lg p-5 duration-300"
            >
              <i className={route.icon}></i>
              <span>{route.name}</span>
            </NavLink>
          ))}
        </ul>

        <hr className="border-none bg-zinc-400 h-[1px] my-2" />
        <h1 className="mt-10 mb-5 font-semibold text-white">Website Information</h1>

        {siteInfoRoutes.map((route, index) => (
          <NavLink
            key={index}
            to={route.path}
            className="flex items-center gap-3 text-lg hover:bg-secondary hover:text-white rounded-lg p-5 duration-300"
          >
            <i className={route.icon}></i>
            <span>{route.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
