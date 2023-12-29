export const setMoodValues = (value: number) => ({
    type: 'SET_MOOD_VALUE',
    payload: value,
})

export const setEnergyValues = (value: number) => ({
    type: 'SET_ENERGY_VALUE',
    payload: value,
})

export const setSleepValues = (value: number) => ({
    type: 'SET_SLEEP_VALUE',
    payload: value,
})

export const setWillPowerValues = (value: number) => ({
    type: 'SET_WILLPOWER_VALUE',
    payload: value,
})