import { testShadowAccount, ShadowLogin } from '../apis/serverAdmin'

function App() {
  const handleClick = async () => {
    await testShadowAccount().then((res) => console.log(res.data))
  }

  return (
    <>
      <button className="btn btn-primary m-1" onClick={ShadowLogin}>
        Server Log in
      </button>
      <button className="btn btn-dark m-1" onClick={handleClick}>
        Test server connection
      </button>
    </>
  )
}

export default App
