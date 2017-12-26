import _ from "lodash";

export const concatArraysWithId = (oldArray, newArray) => {
    const oldArrayIds = _.map(oldArray, item => item.id);
    const newArrayIds = _.map(newArray, item => item.id);

    const diff = _.difference(newArrayIds, oldArrayIds);
    const newArrayFiltered = _.filter(
        newArray,
        item => diff.indexOf(item.id) >= 0
    );

    return [...oldArray, ...newArrayFiltered];
};
