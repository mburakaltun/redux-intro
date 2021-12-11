import * as actionTypes from "./actionTypes"

export const increase_counter = () => ({
    actionType: actionTypes.INCREASE_COUNTER,
    payload: 1
})

export const decrease_counter = () => ({
    actionType: actionTypes.DECREASE_COUNTER,
    payload: 1
})

export const increase_counter_by_two = () => ({
    actionType: actionTypes.INCREASE_COUNTER_BY_TWO,
    payload: 1
})