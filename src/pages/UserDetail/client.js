import axios from 'axios'

const DB_BASE_API = 'http://localhost:4000'
export const USERS_API = `${DB_BASE_API}/api/users`
export const REVIEWS_API = `${DB_BASE_API}/api/reviews`

export const findReviewsByUserId = async userId => {
  try {
    const url = `${REVIEWS_API}/user/${userId}`
    const response = await axios.get(url)
    console.log(response)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const findUserById = async userId => {
  try {
    const url = `${USERS_API}/${userId}`
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const followUnfollowUser = async (userId, usernameToFollow) => {
  try {
    const url = `${DB_BASE_API}/api/following`
    const response = await axios.post(url, { userId, usernameToFollow })
    console.log(userId)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const checkFollowStatus = async (userId, profileUsername) => {
  try {
    const url = `${DB_BASE_API}/api/following`
    const response = await axios.get(url, {
      params: { userId, profileUsername }
    })
    const isFollowing = response.data.some(
      followedUser => followedUser.id === userId
    )
    return isFollowing
  } catch (error) {
    console.error('Error checking follow status:', error)
  }
}
