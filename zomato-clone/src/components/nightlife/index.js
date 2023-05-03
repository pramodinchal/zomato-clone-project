import React from "react";
import "./nightlife.css";
import Collection from "../common/collection";
import { nightlife } from "../../data/nightlife";
import ExploreSection from "../common/exploreSection";
import Filters from "../common/filters";

const collectionList = [
  {
    id: "1",
    title: "Winners of Zomato Restaurant Awards",
    cover:
      "https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg",
    places: "22 places",
  },
  {
    id: "2",
    title: "11 Romantic Dining Places",
    cover:
      "https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674826727.jpg",
    places: "20 places",
  },
];

const nightFilter = [
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
    title: "Distance",
    icon: (
      <img
        className="sort-icon"
        src="https://t3.ftcdn.net/jpg/03/71/26/46/240_F_371264669_e2Zk6E8sG9n2bu8m2hx1Tx7ixyiKbHM5.jpg"
      />
    ),
  },
  {
    id: 3,
    title: "Rating: 4.0+",
  },

  {
    id: 4,
    title: "Pubs & Bars",
  },
];

const nightList = nightlife;

const Nightlife = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={nightFilter} />
      </div>
      <ExploreSection
        list={nightList}
        collectionName="Nightlife Restaurants in Bengaluru"
      />
    </div>
  );
};

export default Nightlife;
