import _ from "lodash";

const convertTableFilterToString = (filter: any) => {
  const objectFilter = {};

  if (!_.isEmpty(filter)) {
    Object.keys(filter).forEach((key) => {
      if (
        (typeof filter[key] === "string" ||
          typeof filter[key] === "number" ||
          typeof filter[key] === "boolean") &&
        filter[key]
      ) {
        objectFilter[key] = filter[key];
      }

      if (typeof filter[key] === "object" && filter[key]) {
        if (filter[key].length === 1) {
          objectFilter[key] = filter[key][0];
        } else {
          objectFilter[key] = filter[key];
        }
      }
    });
  }

  // console.log('result is', objectFilter);
  return JSON.stringify(objectFilter);
};

const convertTableSorter = (sorter: any) => {
  if (_.isEmpty(sorter) || !sorter?.order || !sorter?.field) {
    return JSON.stringify({});
  }

  return JSON.stringify({
    sortField: sorter?.field,
    sortOrder: sorter?.order,
  });
};

const getMoneyFormat = (amount: string | number) => {
  if (!amount) {
    return 0;
  }

  return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export { convertTableFilterToString, convertTableSorter, getMoneyFormat };
