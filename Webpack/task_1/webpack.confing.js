const path = require('path');

module.exports = {
  mode: 'production', // tapşırıqda tələb olunur
  entry: './js/dashboard_main.js', // js qovluğundakı faylı göstərin
  output: {
    filename: 'bundle.js', // webpack tərəfindən yaradılacaq fayl
    path: path.resolve(__dirname, 'public'), // public qovluğa çıxış
  },
};
