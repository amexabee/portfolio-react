import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<NavBar />}></Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
