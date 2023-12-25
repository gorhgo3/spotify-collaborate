import { useQuery } from '@tanstack/react-query'
import { getPlaylists } from '../apis/playlists'
import { Item } from '@models/playlists'
import SinglePlaylist from '@components/SinglePlaylist'

function Playlists() {
  const { data, error } = useQuery({
    // fetch all playlists of shadow account and display
    queryKey: ['spotifyPlaylists'],
    queryFn: async () => getPlaylists(),
  })
  
  if (error) {
    ;<div className="">
      <h1>error</h1>
    </div>
  }

  return (
    <div className="container d-flex flex-wrap">
      {data?.playlists.items.map((item: Item) => (
        <SinglePlaylist {...item} key={item.id}/>
      ))}
    </div>
  )
}

export default Playlists
