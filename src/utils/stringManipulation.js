export function getHeaderTitleFromURL(pathname) {
  let title = pathname.split('/')[1];

  if (!title) return 'Home';
  else return title;
};

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
