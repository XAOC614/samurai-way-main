import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '0a18320d-7a98-4203-b236-40819976048c',
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`, {})
      .then(response => response.data)
  },
}
