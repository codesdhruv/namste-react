import restList from "../utils/mockData";
import ReataurantCard from "./ReataurantCard";
import React, { useState } from "react";

const Body = () => {
  // state variable -> super powerful variable
  const [listofRestaurants, setListofRestarants] = useState(restList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = listofRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListofRestarants(filteredlist);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <ReataurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
