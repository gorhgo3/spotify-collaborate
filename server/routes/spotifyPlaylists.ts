import axios from 'axios'
import Router from 'express'
import shadowCredentials from '../shadow'

const router = Router()

// POST creates a public playlist
router.post('/add-playlist', async (req, res) => {
  try {
    const playlistName = req.body.playlistName
    const playlistDescription = req.body.playlistDescription
    // need to find the user_id
    const userId = shadowCredentials.user?.id
    const addPlaylistRoute = `https://api.spotify.com/v1/users/${userId}/playlists`
    await axios.post(
      addPlaylistRoute,
      {
        name: playlistName,
        description: playlistDescription,
        public: true,
      },
      {
        headers: {
          Authorization: `Bearer ${shadowCredentials.access_token}`,
          'Content-Type': 'application/json',
        },
      }
    )
    res.send('Successfully added playlist' + playlistName)
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Error adding playlist')
  }
})

// GET all shadow playlists
router.get('/get-playlists', async (req, res) => {
  try {
    const getPlaylistsRoute = `https://api.spotify.com/v1/me/playlists`
    const response = await axios.get(getPlaylistsRoute, {
      headers: {
        Authorization: `Bearer ${shadowCredentials.access_token}`,
        'Content-Type': 'application/json',
      },
    })
    res.json({ playlists: response.data })
  } catch (error) {
    res.status(500).send('Error getting playlists')
  }
})

export default router
