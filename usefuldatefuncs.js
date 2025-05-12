// Date with YYYY-MM-DD HH:MM:SS taking into account actual time with Daylight savings - Substiture 'en-GB' for desired coutry code
const getDateTimeWithDLS = (countrycode='en-GB') => { return new Date(new Date().toLocaleString(countrycode)).toISOString().replace("T"," ").replace("Z","").substr(0,19) }
