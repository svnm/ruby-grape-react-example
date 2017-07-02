export default function counter(state = [], action) {
  switch (action.type) {
    case 'FETCH_GAMES_SUCCESS':
      console.log(action.payload)
      state = action.payload
    default:
      return state
  }
}
