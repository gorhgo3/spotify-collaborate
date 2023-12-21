import { Item } from '@models/playlists'

function SinglePlaylist(props: Item) {
  return (
    <div className="card m-1" style={{ width: '15rem' }}>
      <img
        className="card-img-top"
        src={props.images[0].url}
        alt="Card image cap"
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title text-truncate">{props.name}</h5>
        <ul className="font-italic px-0" style={{ fontSize: '0.5rem' }}>
          {props.id}
        </ul>
        <p className="card-text text-truncate">{props.description}</p>
        <a href="#" className="btn btn-primary">
          View details
        </a>
      </div>
    </div>
  )
}

export default SinglePlaylist
