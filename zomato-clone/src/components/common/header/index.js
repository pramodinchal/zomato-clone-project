import React from "react";
import "./header.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <LocationOnIcon className="location-icon-font" />
              <div className="loc-detail">Bangalore</div>
              <ArrowDropDownIcon className="caret" />
            </div>
            <div className="location-search-separator"></div>
            <div className="header-searchbar">
              <SearchIcon className="search-icon" />
              <input
                placeholder="Search for restaurant, cuisine or a dish"
                className="search-input"
              />
            </div>
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/data/user_profile_pictures/58b/b2bed4b23f71dbfdcfdc8ff441b3358b.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="Profile"
            className="header-profile-image"
          />
          <span className="header-username">Pramod</span>
          <KeyboardArrowDownIcon className="profile-option-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
