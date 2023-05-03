import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './components/home';
import Body from './components/body';
import Main from './components/main';

// styles
import './App.css';
import './css/navBar.css';
import './css/home.css';
import './css/footer.css';
import './css/about.css';
import './css/portfolio.css';
import './css/contact.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Body />}>
      <Route index element={<Navigate to="home" replace />} />
      <Route path="home" element={<Home />} />
      <Route path="main" element={<Main />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
