import React from "react";
import classNames from "classnames/bind";

import ImportHar from "./../Components/Import/ImportHAR";
import Search from "./../Components/Filters/Search";
import { useNetwork } from "./../state/network/Context";
import { FILTERS } from "./../constants";
import Button from "./../Components/Common/Button";
import { useTheme } from "../state/theme/Context";
import ErrorFilter from "../Components/Filters/ErrorFilter";
import Reset from "../Components/Import/Reset";

const FilterContainer = () => {
  const { state, actions } = useNetwork();
  const { showImportHAR } = useTheme();
  const filter = state.get("filter");
  const filterByError = state.get("errorFilter");

  return (
    <section>
      <div className="grid grid-cols-12">
        <div className="sm:col-span-12 md:col-span-5 lg:col-span-4">
          <Search {...state.get("search")} onChange={actions.updateSearch} />
        </div>
        <div className="sm:col-span-12 md:col-span-8 lg:col-span-7">
          <div>
            {FILTERS.map(({ name, filterBy }) => {
              const selectedFilter = filterBy.value === filter.value;
              return (
                <Button
                  key={name}
                  category="default"
                  onClick={() => actions.updateFilter(filterBy)}
                  size="sm"
                >
                  {name}
                </Button>
              );
            })}
            <ErrorFilter isError={filterByError} onChange={actions.updateErrorFilter} />
            {showImportHAR && (
              <>
                <ImportHar />
                <Reset onReset={actions.resetState} />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterContainer;
