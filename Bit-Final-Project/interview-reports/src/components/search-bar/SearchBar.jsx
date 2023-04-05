import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setUser, defaultUser, isMainSeachBar }) => {
  const [value, setValue] = useState("");

  const searchData = (event) => {
    const inputValue = event.target.value;
    console.log(defaultUser)
    const data = defaultUser.filter((item) =>
      isMainSeachBar ? item.name.toLowerCase().includes(value.toLocaleLowerCase()) : item.candidateName.toLowerCase().includes(value.toLocaleLowerCase())
    );
    console.log(data);

    setUser(data);
    setValue(inputValue);
    if (inputValue === "") {
      setUser(defaultUser);
    }
  };

  return (
    <div className="search-bar">
      <FaSearch />
      <input type="search" value={value} onChange={searchData} />
    </div>
  );
};

export default SearchBar;
