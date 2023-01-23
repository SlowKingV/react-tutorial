import {
  Link, Route, Routes, useMatch,
} from 'react-router-dom';
import SinglePage from './SinglePage';

const About = () => {
  console.log(useMatch(':path/:slug'));
  const { params } = useMatch(':path/*');
  return (
    <div>
      <ul>
        <li>
          <Link to="about-app">About App</Link>
        </li>
        <li>
          <Link to="about-author">About Author</Link>
        </li>
      </ul>
      <Routes>
        <Route path={`/${params.path}/${params.slug}`} element={<SinglePage />} />
      </Routes>
    </div>
  );
};

export default About;
