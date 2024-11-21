import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
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
    //Header
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
          borderTop: "3px solid gray",
          margin: "10px 0",
        }}
      />

      <button
        //Detonate
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
          flexDirection: "column",
        }}
      >
        <div
          //Select Bomb
          className="select-bomb"
          style={{
            position: "relative",
            width: "100%",
            height: dropdownState ? "25%" : "fit-content",
            display: "flex",
            flexDirection: "row",
            marginBottom: "10px",
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
            <FontAwesomeIcon
              icon={dropdownState ? faCaretRight : faCaretDown}
              style={{ marginLeft: "10px" }}
            />
          </button>

          {dropdownState && (
            <div
              className="side-bar-dropdown"
              style={{
                width: "100%",
                height: "100%",
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
                  width: "100%",
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
        <hr style={{ border: "none", borderTop: "3px solid gray" }} />
        <div
          //Basic Options
          className="basic-options"
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            width: "100%",
            flexGrow: 1,
          }}
        >
          <h1 style={{ margin: "5px", fontSize: "16px" }}>Basic Options:</h1>
          <div
            className="explosion-type-list"
            style={{ display: "flex", marginLeft: "30px" }}
          >
            <label
              style={{ margin: "5px", fontStyle: "italic", fontSize: "14px" }}
            >
              Height of burst:{" "}
            </label>
            <div
              className="explosion-type-select"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                marginLeft: "10px",
              }}
            >
              <div
                className="airburst"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <input type="radio" name="explosion-type" />
                <label style={{ fontSize: "14px", marginLeft: "5px" }}>
                  Airburst
                </label>
              </div>
              <div
                className="surface"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <input type="radio" name="explosion-type" />
                <label style={{ fontSize: "14px", marginLeft: "5px" }}>
                  Surface
                </label>
              </div>
            </div>
          </div>
          <div
            className="other-effects"
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <h6
              style={{
                marginLeft: "30px",
                fontSize: "14px",
                fontStyle: "italic",
                fontFamily: "sans-serif",
                color: "darkgray",
              }}
            >
              Other Effects:
            </h6>
            <div
              className="other-effects-list"
              style={{ display: "flex", alignItems: "center" }}
            >
              <input
                type="checkbox"
                name="other-effects"
                style={{ marginLeft: "10px" }}
              />
              <label style={{ fontSize: "14px", marginLeft: "5px" }}>
                Casualties
              </label>

              <input
                type="checkbox"
                name="other-effects"
                style={{ marginLeft: "10px" }}
              />
              <label style={{ fontSize: "14px", marginLeft: "5px" }}>
                Radioactive fallout
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
