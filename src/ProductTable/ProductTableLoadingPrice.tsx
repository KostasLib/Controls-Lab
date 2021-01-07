import React from "react";
import { CartPlusFillIcon } from "./CartPlusFillIcon";
import { PlusIcon } from "./PlusIcon";
import "./ProductTable.css";
import "./ProductTableLoadingPrice.css";

export function ProductTableLoadingPrice() {
  const handleClick = () => alert("clicked");

  return (
    <div className="ProductTable">
      <div className="ProductTable__Row">
        <div className="ProductTable_Column_Logo">
          <div className="ProductTable_Logo_PH"></div>
        </div>
        <div className="ProductTable_Column_Title">
          Spin functional ethnic diplomat performer
        </div>
        <div className="ProductTable_Column_Covers">
          <div className="ProductTable__CoverItem--Header">Aviation</div>
          <div className="ProductTable__CoverItem">
            <PlusIcon />
            Wine arrangement
          </div>
          <div className="ProductTable__CoverItem">
            <PlusIcon />
            Stretch lesson
          </div>
          <div className="ProductTable__CoverItem">
            <PlusIcon />
            Precede performer
          </div>
          <div className="ProductTable__CoverItem--Link" onClick={handleClick}>
            See Details
          </div>
        </div>
        <div className="ProductTable_Column_Price">
          <div className="LoadingPrice">
            <div className="LoadingPrice__Shimmer"></div>
          </div>
        </div>
      </div>

      <div className="ProductTable__Row">
        <div className="ProductTable_Column_Logo">
          <div className="ProductTable_Logo_PH"></div>
        </div>
        <div className="ProductTable_Column_Title">
          Spin functional ethnic diplomat performer
        </div>
        <div className="ProductTable_Column_Covers">
          <div className="ProductTable__CoverItem--Header">Aviation</div>
          <div className="ProductTable__CoverItem--Link" onClick={handleClick}>
            See Details
          </div>
        </div>
        <div className="ProductTable_Column_Price">
          <div className="LoadingPrice">
            <div className="LoadingPrice__Shimmer"></div>
          </div>
        </div>
      </div>

      <div className="ProductTable__Row">
        <div className="ProductTable_Column_Logo">
          <div className="ProductTable_Logo_PH"></div>
        </div>
        <div className="ProductTable_Column_Title">
          Spin functional ethnic diplomat performer
        </div>
        <div className="ProductTable_Column_Covers">
          <div className="ProductTable__CoverItem--Header">Aviation</div>
          <div className="ProductTable__CoverItem">
            <PlusIcon />
            Precede performer
          </div>
          <div className="ProductTable__CoverItem--Link" onClick={handleClick}>
            See Details
          </div>
        </div>
        <div className="ProductTable_Column_Price">
          <div className="LoadingPrice">
            <div className="LoadingPrice__Shimmer"></div>
          </div>
        </div>
      </div>

      <div className="ProductTable__Row">
        <div className="ProductTable_Column_Logo">
          <div className="ProductTable_Logo_PH"></div>
        </div>
        <div className="ProductTable_Column_Title">
          Spin functional ethnic diplomat performer
        </div>
        <div className="ProductTable_Column_Covers">
          <div className="ProductTable__CoverItem--Header">Aviation</div>
          <div className="ProductTable__CoverItem">
            <PlusIcon /> Wine arrangement
          </div>
          <div className="ProductTable__CoverItem">
            <PlusIcon /> Precede performer
          </div>
          <div className="ProductTable__CoverItem--Link" onClick={handleClick}>
            See Details
          </div>
        </div>
        <div className="ProductTable_Column_Price">
          <div className="LoadingPrice">
            <div className="LoadingPrice__Shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
