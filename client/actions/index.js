import { getProduce } from '../apis/produce'

export const SET_PRODUCE = 'SET_PRODUCE'

export function setProduce(produce) {
  return {
    type: SET_PRODUCE,
    payload: produce,
  }
}

export function fetchProduce() {
  return (dispatch) => {
    return getProduce().then((produce) => {
      dispatch(setProduce(produce))
    })
  }
}
