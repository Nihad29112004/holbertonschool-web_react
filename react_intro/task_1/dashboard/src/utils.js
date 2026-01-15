// Cari ili qaytarır
export const getCurrentYear = () => {
  return new Date().getFullYear();
};

// isIndex-ə görə fərqli mətnlər qaytarır
export const getFooterCopy = (isIndex) => {
  if (isIndex) {
    return 'Holberton School';
  }
  return 'Holberton School main dashboard';
};