import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import GetData from "../controllers/fetch";
import styles from "../styles/sidebar.module.css";

export default function Sidebar() {
  const bomblist: string[] = ["Mk-I", "Mk-III", "he", "molotov"];
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

  const handleSelectBomb = (bomb: string) => {
    setSearchValue(bomb);
    setDropdownState(false);
  };

  return (
    //Header
    <div className={`${styles.sideBarWrapper}`}>
      <h2 style={{ textAlign: "center" }}>NUKEMAP</h2>
      <hr className={`${styles.sideBarHr}`} />

      <button
        //Detonate
        className={`${styles.detonateButton}`}
        onClick={() => GetData(searchValue)}
      >
        Detonate
      </button>

      <div className={`${styles.sideBarMain}`}>
        <div
          //Select Bomb
          className={`${styles.selectBomb} ${
            dropdownState ? styles.bombDropDownOpen : styles.bombDropDownClosed
          }`}
        >
          <button
            className={`${styles.selectBombButton}`}
            onClick={() => setDropdownState(!dropdownState)}
          >
            {searchValue ? searchValue : "Select Bomb"}
            <FontAwesomeIcon
              icon={dropdownState ? faCaretRight : faCaretDown}
              style={{ marginLeft: "10px" }}
            />
          </button>

          {dropdownState && (
            <div className={`${styles.sideBarDropDown}`}>
              <input
                className={`${styles.bombNameInput}`}
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={handleSearchChange}
              />
              <ul className={`${styles.bombNameList}`}>
                {modifiedBombList.map((item, index) => (
                  <li onClick={() => handleSelectBomb(item)} key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <hr className={`${styles.sideBarHr}`} />
        <div
          //Basic Options
          className={`${styles.basicOptions}`}
        >
          <h1>Basic Options:</h1>
          <div className={`${styles.explosionTypeList}`}>
            <label className={`${styles.explosionTypeListLabel}`}>
              Height of burst:{" "}
            </label>
            <div className={`${styles.explosionTypeSelect}`}>
              <div className={`${styles.airburst}`}>
                <input type="radio" name="explosion-type" />
                <label>Airburst</label>
              </div>
              <div className={`${styles.surface}`}>
                <input type="radio" name="explosion-type" />
                <label>Surface</label>
              </div>
            </div>
          </div>
          <div className={`${styles.otherEffects}`}>
            <h6>Other Effects:</h6>
            <div className={`${styles.otherEffectsList}`}>
              <input type="checkbox" />
              <label>Casualties</label>

              <input type="checkbox" />
              <label>Radioactive fallout</label>
            </div>
          </div>
        </div>
        <hr className={`${styles.sideBarHr}`} />
        <div
          className="bomb-effect"
          style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
        >
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
}
