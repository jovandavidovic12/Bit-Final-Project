import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ dataCopy, setData, deafultData }) => {
  const [value, setValue] = useState("");

  const searchData = (event) => {
    // event.preventDefault(setData(dataCopy))
    const inputValue = event.target.value;
    const data = dataCopy.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setData(data);
    setValue(inputValue);
    if (inputValue === "") {
      setData(deafultData);
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
