type Props = {
  nickname: string
  picture: string
  email: string
  profile: string
  sub?: string
}

function Profile(props: Props) {
  return (
    <div className="container text-center">
      {props && (
        <>
          <div className="card p-2" style={{ width: '18rem' }}>
            <img
              src={
                props.picture
                  ? props.picture
                  : 'https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png'
              }
              alt="Card image cap"
              className="card-img-top profile-img img-fluid mx-auto"
            />
            <div className="card-body">
              <h5 className="card-title">{props.nickname}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">email: {props.email}</li>
              <li className="list-group-item">id: {props.sub}</li>
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default Profile
