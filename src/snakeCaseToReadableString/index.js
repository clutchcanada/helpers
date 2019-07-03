const snakeCaseToReadableString = (objectKey) => {
    const parsedString = objectKey.replace(/_/g, " ").toLowerCase();
    return parsedString.charAt(0).toUpperCase() + parsedString.slice(1); 
}

export default snakeCaseToReadableString;