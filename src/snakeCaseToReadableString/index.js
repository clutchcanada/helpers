const capitalizeFirstLetter = value => value.charAt(0).toUpperCase() + value.slice(1);

const snakeCaseToReadableString = (key = '') =>  {
    const readableString = key.split('_')
    .map(value => value.toLowerCase())
    .join(' ');
    return capitalizeFirstLetter(readableString);
}

export default snakeCaseToReadableString;