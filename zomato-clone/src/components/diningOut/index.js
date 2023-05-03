import React from "react";
import "./diningOut.css";
import Collection from "../common/collection";
import ExploreSection from "../common/exploreSection";
import Filters from "../common/filters";
import { diningOut } from "../../data/diningOut";

const collectionList = [
  {
    id: "1",
    title: "Winners of Zomato Restaurant Awards",
    cover:
      "https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg",
    places: "18 places",
  },
  {
    id: "2",
    title: "11 Romantic Dining Places",
    cover:
      "https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674825932.jpg",
    places: "13 places",
  },
  {
    id: "3",
    title: "10 Newly Opened Restaurants",
    cover:
      "https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674825385.jpg",
    places: "8 places",
  },
  {
    id: "4",
    title: "10 Picturesque Cafes",
    cover:
      "https://b.zmtcdn.com/data/collections/bfa5063b43c9b8f6c9c3b1a37c815d3b_1674826835.jpg",
    places: "9 places",
  },
  {
    id: "5",
    title: "12 Thrilling Live Cricket Screenings",
    cover:
      "	https://b.zmtcdn.com/data/collections/a1bafc59f9aa67998b9f8de61b9abbd4_1680161022.png",
    places: "15 places",
  },
  {
    id: "6",
    title: "22 Serene Rooftop Places",
    cover:
      "https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674825836.jpg",
    places: "23 places",
  },
  {
    id: "7",
    title: "10 Trending Restaurants",
    cover:
      "https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247364.jpg",
    places: "10 places",
  },
  {
    id: "8",
    title: "22 Finest Microbreweries",
    cover:
      "	https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg",
    places: "22 places",
  },
];

const diningFilter = [
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

const diningList = diningOut;
const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={diningFilter} />
      </div>
      <ExploreSection
        list={diningList}
        collectionName="Best Dining Restaurants near you in Bengaluru"
      />
    </div>
  );
};

export default DiningOut;
