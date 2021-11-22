export function mongoDbConfig() : any {
    return process.env.MONGODB_URI  
}

export function sportsDbBaseUrlWithApiKey() : string {
    return `${process.env.BASE_URL_V1}${process.env.API_KEY}/`
}