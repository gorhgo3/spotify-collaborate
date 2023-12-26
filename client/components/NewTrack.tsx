import { Item } from '@models/trackResults'
import { addPlaylistTrack, checkSpotifyTracks } from '../apis/playlists'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

type Props = {
  id: string
}
function NewTrack(props: Props) {
  const [search, setSearch] = useState(false)
  const [searchResults, setSearchResults] = useState<Item[] | null>()

  async function handleSearch(e: React.FormEventHandler<HTMLFormElement>) {
    e.preventDefault()
    const trackName = e.target.searchbar.value
    await checkSpotifyTracks(trackName)
      .then((res) => res.data)
      .then((data) => setSearchResults(data.response.tracks.items))
  }

  async function addToPlaylist(uri: string) {
    // console.log(uri, props.id)
    await addPlaylistTrack(props.id, uri)
  }

  return (
    <>
      <Button variant="success" onClick={() => setSearch(true)}>
        Add Track
      </Button>

      <Modal
        show={search}
        onHide={() => {
          setSearch(false)
          setSearchResults(null)
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Search and add track</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSearch(e)}>
            <Form.Group className="mb-3">
              <Form.Label>Track name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Stan"
                id="searchbar"
                autoFocus
              />
            </Form.Group>
          </Form>
          {searchResults &&
            searchResults.map((track: Item) => (
              <div
                className="track track-selector"
                key={track.id}
                onClick={() => addToPlaylist(track.uri)}
              >
                <div className="details d-flex">
                  <img
                    src={track.album.images[0]?.url}
                    alt=""
                    style={{ width: '3rem', height: '3rem' }}
                    className="mr-2"
                  />
                  <div className="details-text text-left">
                    <p className="mb-0">{track.name}</p>
                    <p className="mb-0" style={{ color: 'grey' }}>
                      {track.explicit && '🅴'}
                      {track.artists[0].name}
                    </p>
                  </div>
                  <div className="ml-auto mr-2 align-self-center">
                    <i
                      className="fa-solid fa-plus"
                      style={{ fontSize: '1.5rem', color: '#1ED760' }}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NewTrack
