import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Body from './components/body';

// styles
import './App.css';
import './css/navBar.css';
import './css/home.css';
import './css/footer.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Body />}>
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
