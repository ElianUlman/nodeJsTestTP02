import countryCurrencyMap from "country-currency-map";

const getCountry = countryCurrencyMap.getCountry
const getCurrency = countryCurrencyMap.getCurrency



export const conseguirMoneda = (country) => {
    return getCurrency(getCountry(country).currency).name
}