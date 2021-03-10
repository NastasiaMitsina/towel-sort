module.exports = function towelSort(matrix) {
    if (typeof matrix !== "undefined") {
        matrix.forEach((item, index) => {
            index % 2 !== 0 ? item.reverse() : item;
        });
    } else {
        matrix = [];
    }
    return [].concat(...matrix);
};
