const numberWithSpaces = x =>
    parseInt(x)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export default numberWithSpaces;
