// Date with YYYY-MM-DD HH:MM:SS taking into account actual time with Daylight savings - Substiture 'en-GB' for desired coutry code
const getDateTimeWithDLS = (countrycode='en-GB') => { return new Date().toISOString().substring(0,19) + ' ' + new Date().toTimeString().substring(0,8) }
