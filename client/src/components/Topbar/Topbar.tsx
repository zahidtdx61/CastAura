import { useState } from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [query, setQuery] = useState("");

  console.log(query);

  return (
    <div className="text-zinc-400 mt-2 w-full h-[10vh] relative flex justify-start items-center ml-[20%]">
      <i className="ri-search-2-line block text-3xl"></i>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] p-5 mx-5 block text-xl rounded-sm outline-none border-none bg-transparent"
        placeholder="search anything"
      />

      {query.length > 0 && <i onClick={() => setQuery("")} className="ri-close-line block text-3xl hover:cursor-pointer"></i>}

      <div className="w-[50%] max-h-[50vh] absolute bg-zinc-200 top-[90%] overflow-auto rounded">
        {/* <Link
          to={"/"}
          className="text-zinc-600 font-semibold w-[100%] p-10 flex justify-start items-center border-b border-zinc-100 hover:text-black hover:bg-zinc-300 duration-300"
        >
          <img src="" alt="" />
          <span>Hello everyone</span>
        </Link> */}
        
      </div>
    </div>
  );
};

export default Topbar;
