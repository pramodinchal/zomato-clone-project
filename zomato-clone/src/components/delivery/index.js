import React from "react";
import "./delivery.css";
import Filters from "../common/filters";
import DeliveryCollections from "./deliveryCollections";
import TopBrands from "./topBrands";
import ExploreSection from "../common/exploreSection";
import { restaurants } from "../../data/restaurants";

const deliveryFilter = [
  {
    id: 1,
    icon: (
      <img
        className="filter-icon"
        src="https://as1.ftcdn.net/v2/jpg/03/21/21/26/1000_F_321212678_hSKU8jlbFhiBzPEXS7BUS9b89nTygCYD.jpg"
      />
    ),
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: (
      <img
        className="sort-icon"
        src="https://t3.ftcdn.net/jpg/03/71/26/46/240_F_371264669_e2Zk6E8sG9n2bu8m2hx1Tx7ixyiKbHM5.jpg"
      />
    ),
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantList = restaurants;
const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilter} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection
        list={restaurantList}
        collectionName="Delivery Restaurants in Bangalore"
      />
    </div>
  );
};

export default Delivery;
