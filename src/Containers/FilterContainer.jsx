import React from "react";
import classNames from "classnames/bind";

import ImportHar from "./../Components/Import/ImportHAR";
import Search from "./../Components/Filters/Search";
import { useNetwork } from "./../state/network/Context";
import { FILTERS } from "./../constants";
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
      <div className="grid grid-cols-12 p-4 dark:bg-gray-800">
        <div className="sm:col-span-12 md:col-span-3 lg:col-span-4">
          <Search {...state.get("search")} onChange={actions.updateSearch} />
        </div>
        <div className="sm:col-span-12 md:col-span-9 lg:col-span-8 ml-auto">
          <div className="flex items-center gap-2">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              {FILTERS.map(({ name, filterBy }, index) => {
                const selectedFilter = filterBy.value === filter.value;

                const startClassName = `px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white`;
                const midClassName = `px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white`;
                const endClassName = `px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white`;

                return (
                  <button
                    key={name}
                    className={
                      index === 0
                        ? startClassName
                        : index === FILTERS.length - 1
                        ? endClassName
                        : midClassName
                    }
                    onClick={() => actions.updateFilter(filterBy)}
                  >
                    {name}
                  </button>
                );
              })}
            </div>
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
