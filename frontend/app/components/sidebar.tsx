import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
export default function Sidebar() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const bomblist: string[] = ["tnt", "c4", "he", "molotov"];
  const [modifiedBombList, setModifiedBombList] = useState<string[]>(bomblist);
  const [dropdownState, setDropdownState] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value.trim() !== "") {
      setModifiedBombList(
        bomblist.filter((item) =>
          item.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setModifiedBombList(bomblist);
    }
  };

  return (
    <div
      className="side-bar-wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "20%",
        overflow: "auto",
        flexGrow: 1,
        backgroundColor: "yellow",
        padding: "10px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>NUKEMAP</h2>
      <hr
        style={{
          border: "none",
          borderTop: "1px solid gray",
          margin: "10px 0",
        }}
      />

      <button
        style={{
          width: "40%",
          height: "50px",
          margin: "0px auto",
          marginBottom: "20px",
          borderRadius: "10px",
          backgroundColor: "red",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          animation: isHovered ? "0.5s ease-in-out" : "none",
          cursor: "pointer",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3
          style={{
            textAlign: "center",
            color: "gray",
            fontSize: "30px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Detonate
        </h3>
      </button>

      <div
        className="side-bar-main"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <button
          style={{
            width: "50%",
            height: "40px",
            borderRadius: "10px",
            cursor: "pointer",
            marginRight: "10px",
          }}
          onClick={() => setDropdownState(!dropdownState)}
        >
          Select Bomb
          <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: "10px" }} />
        </button>

        {dropdownState && (
          <div
            className="side-bar-dropdown"
            style={{
              width: "100%",
              height: "30%",
              position: "relative",
              overflowY: "auto",
            }}
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearchChange}
              style={{
                width: "50%",
                height: "30px",
                textAlign: "center",
                borderRadius: "10px",
              }}
            />
            <ul
              style={{
                position: "absolute",
                top: "40px",
                width: "50%",
                backgroundColor: "gray",
                borderRadius: "10px",
                textAlign: "center",
                listStyleType: "none",
              }}
            >
              {modifiedBombList.map((item, index) => (
                <li
                  key={index}
                  style={{
                    height: "35px",
                    cursor: "pointer",
                    borderBottom:
                      index !== modifiedBombList.length - 1
                        ? "1px solid white"
                        : "none",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
