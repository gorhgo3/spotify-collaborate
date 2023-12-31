import Router from 'express'
import shadowCredentials from '../shadow'
import * as spotify from '../api/spotify/playlists'
import { fetchTrack } from '../api/spotify/tracks'
import axios from 'axios'

const router = Router()

// POST creates a public playlist
router.post('/add-playlist', async (req, res) => {
  try {
    const data = {
      userId: shadowCredentials.user?.id,
      access_token: shadowCredentials.access_token,
      playlistName: req.body.playlistName,
      playlistDescription: req.body.playlistDescription,
    }
    await spotify.addPlaylist(data)
    res.send('Successfully added playlist' + req.body.playlistName)
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Error adding playlist')
  }
})

// GET all shadow playlists
router.get('/get-playlists', async (req, res) => {
  try {
    const playlists = await spotify.fetchUserPLaylists(
      shadowCredentials.access_token
    )
    res.json({ playlists })
  } catch (error) {
    res.status(500).send('Error getting playlists')
  }
})

// GET playlist details
router.get(`/details/:playlistId`, async (req, res) => {
  try {
    const { playlistId } = req.params
    const data = {
      access_token: shadowCredentials.access_token,
      playlistId,
    }
    const playlistDetails = await spotify.fetchPlaylistId(data)
    res.json({ playlistDetails })
  } catch (error) {
    res.status(500).send('Error getting playlist details')
  }
})

// handle adding new tracks
router.post('/add-track/:trackId', async (req, res) => {
  try {
    const { trackId: trackUri } = req.params
    const { playlistId } = req.body.data

    await spotify.addTrack({
      accessToken: shadowCredentials.access_token,
      playlistId,
      trackUri,
    })
    res.send('Successfully added track to playlist')
  } catch (error) {
    console.log(error.message)
    res.send({ error: error })
  }
})

router.get('/search/:trackName', async (req, res) => {
  try {
    const { trackName } = req.params
    const response = await fetchTrack({
      trackName,
      accessToken: shadowCredentials.access_token,
    })
    res.json({ response })
  } catch (error) {
    res.send({ error })
  }
})

export default router
