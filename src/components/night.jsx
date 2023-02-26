const Night = ({ night }) => {
  let icon = 'fa fa-sun-o';
  if (night) icon = 'fa fa-moon-o';
  return <i className={icon}></i>;
};

export default Night;
