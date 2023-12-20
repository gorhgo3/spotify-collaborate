import { UserDetails } from '../models/user'

type ShadowCredentialsType = {
  access_token: string
  refresh_token: string
  expires_in: string
  user: UserDetails | null
}

const shadowCredentials: ShadowCredentialsType = {
  access_token: '',
  refresh_token: '',
  expires_in: '',
  user: null,
}
export default shadowCredentials
