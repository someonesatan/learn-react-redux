let mockApiData = [
  {
    id: 1,
    name: 'trackFromApi1'
  },
  {
    id: 1,
    name: 'trackFromApi2'
  },
  {
    id: 1,
    name: 'trackFromApi3'
  },
  {
    id: 1,
    name: 'trackFromApi4'
  }
]

const getTracks = () => dispatch => {
  setTimeout(() => {
    console.log('I got tracks')

    mockApiData.forEach((item, index) => {
      dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: item})
    })
  }, 2000)
}

export default getTracks
