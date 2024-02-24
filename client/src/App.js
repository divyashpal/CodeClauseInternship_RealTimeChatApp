import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './modules/Dashboard';
import Form from './modules/Form';

const ProtectedRoute = ({ children, auth = false }) => {
  const isLoggedIn = localStorage.getItem('user:token') !== null || false

  if (!isLoggedIn && auth) {
    return <Navigate to={'/users/sign_in'} />
  } else if (isLoggedIn && ['/users/sign_in', '/users/sign_up'].includes(window.location.pathname)) {
    return <Navigate to={'/'} />
  }
  return children

}
function App() {
  return (
    <Routes>
      <Route path='/' element={
        <ProtectedRoute auth = {true}>
          <Dashboard />
        </ProtectedRoute>
      }></Route>
      <Route path='/users/sign_in' element={
        <ProtectedRoute>
          <Form isSigninPage={true} />
        </ProtectedRoute>}></Route>
      <Route path='/users/sign_up' element={
        <ProtectedRoute>
          <Form isSigninPage={false} />
        </ProtectedRoute>}></Route>
    </Routes>
  );
}

export default App;
