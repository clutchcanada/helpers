const capitalizeString = value => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

const snakeCaseToReadableString = (key = '') =>  {
    const readableString = key.split('_')
    .map(value => value.toLowerCase())
    .join(' ');
    return capitalizeString(readableString);
}

export default snakeCaseToReadableString;