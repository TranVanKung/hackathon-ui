import _ from "lodash";

const updateOrDelete = (_id: string, listData: any[], data?: any) => {
  const tempListData = [...listData];
  const indexOfData = _.findIndex(tempListData, { _id });

  if (indexOfData !== -1) {
    // if data is not provided, it mean 'delete this _id'
    if (typeof data === "undefined") {
      tempListData.splice(indexOfData, 1);
    } else {
      tempListData.splice(indexOfData, 1, data);
    }
  }

  return tempListData;
};

export { updateOrDelete };
