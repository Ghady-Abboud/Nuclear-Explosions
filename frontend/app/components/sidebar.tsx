import React, { useState } from "react";

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const [SearchValue, setSearchValue] = useState<string>("");
  const [bombNames, setBombNames] = useState<string[]>([
    "tnt",
    "c4",
    "he",
    "molotov",
  ]);
  const [filteredBombNames, setFilteredBombNames] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchChange = (event: any) => {
    const value: string = event.target.value;
    setSearchValue(value);

    if (value) {
      const filteredBombs: string[] = bombNames.filter((name: string) => {
        name.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredBombNames(filteredBombs);
    } else {
      setFilteredBombNames([]);
    }
  };

  const handleDropdownToggle = () => {
    setFilteredBombNames(bombNames);
    setShowDropdown(true);
  };

  const handleDropdownSelect = (bombName: string) => {
    setSearchValue(bombName);
    setShowDropdown(false);
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

      <div className="side-bar-main" style={{ width: "100%", flexGrow: 1 }}>
        <input
          type="text"
          placeholder="Select Bomb"
          value={SearchValue}
          onChange={handleSearchChange}
          onClick={handleDropdownToggle}
        />
        {showDropdown && (
          <ul
            style={{
              listStyleType: "none",
              margin: "0",
              padding: "0",
              backgroundColor: "white",
              border: "1px solid gray",
              maxHeight: "150px",
              overflowY: "auto",
              position: "absolute",
              zIndex: 10,
              width: "100%",
            }}
          >
            {filteredBombNames.map((bomb, index) => (
              <li
                key={index}
                onClick={() => handleDropdownSelect(bomb)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  backgroundColor: "lightgray",
                  borderBottom: "1px solid gray",
                }}
                onMouseEnter={(event) =>
                  (event.currentTarget.style.backgroundColor = "darkgray")
                }
                onMouseLeave={(event) =>
                  (event.currentTarget.style.backgroundColor = "lightgray")
                }
              >
                {bomb}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
