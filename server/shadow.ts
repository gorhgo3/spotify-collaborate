import { UserDetails } from '../models/user'

type ShadowCredentialsType = {
  access_token: string
  refresh_token: string
  expires_in: number
  user: UserDetails | null
}

const shadowCredentials: ShadowCredentialsType = {
  access_token: '',
  refresh_token: '',
  expires_in: 0,
  user: null,
}
export default shadowCredentials
