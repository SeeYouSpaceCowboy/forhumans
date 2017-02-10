import axios from 'axios'

export function fetchProfiles(){
  let url = `http://forhumans.herokuapp.com/v1/users/`
  const users = axios.get(url).then(response => response.data)

  return {
    type: 'FETCH_PROFILE',
    payload: users.data
  }
}
