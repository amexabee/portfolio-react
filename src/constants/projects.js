import banking from '../images/thumbnails/banking.JPG';
import space from '../images/thumbnails/space.JPG';
import movies from '../images/thumbnails/movies.JPG';
import bookstore from '../images/thumbnails/bookstore.JPG';

const projects = [
  {
    name: banking,
    github: 'https://github.com/amexabee/Final-Capstone-FrontEnd',
    link: 'https://banking-app-chi-six.vercel.app/',
    label: 'Banking App',
    description:
      'A full-stack role-based banking application with user, employee, and admin functionality.',
    tools: 'TypeScript, NextJS, Express, Postgres',
  },
  {
    name: space,
    github: 'https://github.com/amexabee/spacex-react-redux',
    link: 'https://amanuel-space-travleres-hub.netlify.app/',
    label: 'Space Travelers Hub',
    description:
      'This is an app that lets you view different rockets lists and missions lists and be able to reserve a rocket and join a mission.',
    tools: 'React, Redux',
  },
  {
    name: movies,
    github: 'https://github.com/amexabee/metrics-webapp',
    link: 'https://amanuel-moviehub.netlify.app/',
    label: 'Movies & TV Shows List',
    description:
      'This app fetches top movies and tv shows from an api and displays them. Users can filter through the list by typing a search parameter and get detailed information.',
    tools: 'React, Redux',
  },
  {
    name: bookstore,
    github: 'https://github.com/amexabee/bookstore',
    link: 'https://amexabee.github.io/bookstore/',
    label: 'Bookstore',
    description:
      'In this bookstore application, users will see a list of books displayed, and also it allows users to add a book and remove a selected book.',
    tools: 'React, Redux',
  },
];

export default projects;
