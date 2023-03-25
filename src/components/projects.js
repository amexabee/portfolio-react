import blog from '../images/thumbnails/blog.JPG';
import space from '../images/thumbnails/space.JPG';
import movies from '../images/thumbnails/movies.JPG';
import bookstore from '../images/thumbnails/bookstore.JPG';

const posts = [
  {
    name: blog,
    github: 'https://github.com/amexabee/Capstone_js',
    link: 'https://amanuel-blog-post.netlify.app/',
  },
  {
    name: space,
    github: 'https://github.com/amexabee/spacex-react-redux',
    link: 'https://amanuel-space-travleres-hub.netlify.app/',
  },
  {
    name: movies,
    github: 'https://github.com/amexabee/metrics-webapp',
    link: 'https://amexabee.github.io/To-Do-List/dist/',
  },
  {
    name: bookstore,
    github: 'https://github.com/amexabee/bookstore',
    link: 'https://amexabee.github.io/bookstore/',
  },
];

const projects = [
  {
    label: 'Budget App',
    built: 'Ruby, Rails, Postgres',
    to: 'http://rails-733t.onrender.com/',
  },
  {
    label: 'Recipe App',
    built: 'Ruby, Rails, Postgres',
    to: 'https://github.com/amexabee/recipes_on_rails',
  },
  {
    label: 'Blog App',
    built: 'Ruby, Rails, Postgres',
    to: 'https://github.com/amexabee/blog-app',
  },
  {
    label: 'Catalog App',
    built: 'Ruby',
    to: 'https://github.com/amexabee/catalog-of-my-things',
  },
  {
    label: 'School Library App',
    built: 'Ruby',
    to: 'https://github.com/amexabee/school-library',
  },
  {
    label: 'Calculator App',
    built: 'React',
    to: 'https://amanuel-math-magicians-8u34.onrender.com/',
  },
  {
    label: 'Leaderboard App',
    built: 'JavaScript',
    to: 'https://github.com/amexabee/Leaderboard',
  },
  {
    label: 'Todo List',
    built: 'JavaScript',
    to: 'https://amexabee.github.io/To-Do-List/dist/',
  },
];

const getPosts = () => {
  return posts;
};

export const getProjects = () => {
  return projects;
};

export default getPosts;
