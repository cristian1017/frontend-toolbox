import React from "react";
import { Header } from "./header/Header";
import { TableDataSet } from "./table/TableDataSet";
import { FilterDropdown } from "./dropdown/FilterDropdown";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <FilterDropdown />
      <TableDataSet />
    </div>
  );
};
