import { useState } from "react";
import bgDesktop from "./images/pattern-bg-desktop.png";
import Arrow from "./images/icon-arrow.svg";

import bgMobile from "./images/pattern-bg-mobile.png";

function Navigation({ onSearch, children }) {
  const [searchValue, setSearchValue] = useState("");

  function handleClick(e) {
    e.preventDefault();
    if (searchValue === "") return;
    onSearch(searchValue);
    setSearchValue("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleClick(e);
    }
  }

  return (
    <div
      style={{
        "--bg-mobile": `url(${bgMobile})`,
        "--bg-desktop": `url(${bgDesktop})`,
      }}
      className="h-[260px] md:h-[25vh] lg:h-[35vh] w-screen bg-cover bg-center bg-[image:var(--bg-mobile)] md:bg-[image:var(--bg-desktop)] relative z-10"
    >
      <div className="flex flex-col items-center justify-center pt-6">
        <h1 className="text-white text-3xl font-semibold mb-5">
          IP Address Tracker
        </h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            className="w-2xs md:w-100 p-4 rounded-l-2xl bg-white focus:outline-none"
            onKeyDown={handleKeyDown}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="bg-black p-[1.3rem] rounded-r-2xl cursor-pointer hover:bg-dark-gray transition-colors ease-in"
            onClick={handleClick}
          >
            <img src={Arrow} alt="arrow icon" />
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Navigation;
