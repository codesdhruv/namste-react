import restList from "../utils/mockData";
import ReataurantCard from "./ReataurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search"> search</div>
      <div className="res-container">
        {restList.map((restaurant) => (
          <ReataurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
