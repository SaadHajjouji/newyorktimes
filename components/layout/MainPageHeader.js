import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
const MainPageHeader = () => {
  return (
    <header>
      <section>
        <div>
          <button>
            <FaBars />
          </button>
          <button>
            <FaSearch />
          </button>
          <div>
            <form>
              <input />
              <button>GO</button>
            </form>
          </div>
        </div>
      </section>
    </header>
  );
};

export default MainPageHeader;
