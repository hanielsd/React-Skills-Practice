import { Navigate, Outlet } from 'react-router-dom'
function Protected({ children }) {
  let isSignedIn = false

  if (!isSignedIn) {
    return <Navigate to="/" replace />
  }
  return children
}
function ProtectedLayout() {
  let isSignedIn = false

  if (!isSignedIn) {
    return <Navigate to="/" replace />
  }
  return <Outlet />
}
/**
 * we can use it as shown below
 * only home and dashboard are protected
 */

let routes = (
  <Routes>
    <Route index element={<Landing />} />
    <Route path="landing" element={<Landing />} />
    <Route
      path="home"
      element={
        <Protected user={user}>
          <Home />
        </Protected>
      }
    />
    <Route
      path="dashboard"
      element={
        <Protected user={user}>
          <Dashboard />
        </Protected>
      }
    />
    {/* OR */}
    /***this one is better */
    <Route path="" element={<ProtectedLayout />}>
      <Route path="home" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
    <Route path="analytics" element={<Analytics />} />
    <Route path="admin" element={<Admin />} />
    <Route path="*" element={<p>There's nothing here: 404!</p>} />
  </Routes>
)
