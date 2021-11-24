export function sportsDbBaseUrlWithApiKey() : string {
    return `${process.env.BASE_URL_V1}${process.env.API_KEY}/`
}