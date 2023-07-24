import './App.css';
import { useRoutes } from 'react-router-dom';

import { Nav } from './Components/Nav/Nav';
import { Home } from './Components/HomePage/Home/Home';
import { Foouter } from './Components/Foouter/Foouter';

import { Registr } from './Components/Registration/Registr';

import { CoursesItem } from './Components/CoursesItem/CoursesItem';
import { Mathematics } from './Components/CoursesItem/lesson/Matematika/Mathematics';

import { Tests } from './Components/Tests/tests';
import { Mathematics_Test } from './Components/Tests/Test/Mathematics-Test/Mathematics-Test';

import { Ratings } from './Components/Ratings/Ratings';

function App() {

  const routers = useRoutes([
    { path: "/", element: <Home />, },

    { path: "Registr", element: <Registr /> },

    { path: "Courses", element: <CoursesItem /> },
    { path: "Courses/Mathematics", element: <Mathematics /> },

    { path: "tests", element: <Tests /> },
    { path: "tests/Mathematics", element: <Mathematics_Test /> },

    { path: "Ratings", element: <Ratings /> },

  ])

  return (
    <div className="App">
      <Nav />
      {routers}
      <Foouter />
    </div>
  );
}

export default App;
