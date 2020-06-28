const api = 'https://abhi3315-covid-api.herokuapp.com'

export const stateWiseData = async () => {
    const result = await fetch(`${api}/india`)
    const data = await result.json()
    return data
}

export const districtWiseData = async () => {
    const result = await fetch(`${api}/india/district`)
    const data = await result.json()
    return data
}

export const caseTimeSeries = async () => {
    const result = await fetch(`${api}/cases_time_series`)
    const data = await result.json()
    return data.cases_time_series
}