import AuthIntro from './AuthIntro'
import AuthProvider from './AuthProvider'

export default function AuthWrapper() {
  return (
    <AuthProvider>
      <AuthIntro />
    </AuthProvider>
  )
}
