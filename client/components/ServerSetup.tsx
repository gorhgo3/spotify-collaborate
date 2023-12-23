import { ShadowLogin, isServerAccount } from '../apis/serverAdmin'
import React, { useEffect } from 'react'

interface Props {
  children: React.ReactNode
}

function ServerSetup(props: Props) {
  async function checkServer() {
    const serverConnection = await isServerAccount().then((res) => res.data)
    if (serverConnection === false) ShadowLogin()
  }

  useEffect(() => {
    checkServer()
  })

  return <>{props.children}</>
}

export default ServerSetup
