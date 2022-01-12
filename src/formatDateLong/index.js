const formatDateLong = (date) =>
  new Date(date).toLocaleDateString('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

export default formatDateLong;
