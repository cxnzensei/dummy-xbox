import Accessories from "./components/Accessories";
import Banner from "./components/Banner";
import BigGrid from "./components/BigGrid";
import Footer from "./components/Footer";
import Handles from "./components/Handles";
import Header from "./components/Header";

import { useState } from "react";

const App = () => {

  const [ham, setHam] = useState(false)
  const [search, setSearch] = useState(false)
  const [xbox, setXbox] = useState(false)
  const [togMenu, setTogMenu] = useState({})

  return (
      <div className="cursor-default">
        <Header ham={ham} xbox={xbox} setXbox={setXbox} togMenu={togMenu} setTogMenu={setTogMenu} setHam={setHam} search={search} setSearch={setSearch} />
        <div onClick={() => {
          setSearch(false)
          setHam(false)
          setXbox(false)
          setTogMenu({})
        }}>
          <Banner />
          <Accessories />
          <BigGrid />
          <Handles />
          <Footer />
        </div>
      </div>
  );
}

export default App;
