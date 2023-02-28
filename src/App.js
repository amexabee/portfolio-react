import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './components/home';
import About from './components/about';

// styles
import './App.css';
import './css/navBar.css';
import './css/home.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Navigate to="home" replace />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
