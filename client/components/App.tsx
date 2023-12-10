import { testShadowAccount, ShadowLogin } from '../apis/serverAdmin'

function App() {
  
  const handleClick = async () => {
    await testShadowAccount().then((res) => console.log(res.data))
  }

  return (
    <>
      <h1>Hello world</h1>
      <button onClick={ShadowLogin}>Server Log in</button>
      <button onClick={handleClick}>Test server connection</button>
    </>
  )
}

export default App
