const Night = ({ night, onClick }) => {
  let icon = 'fa fa-moon-o';
  if (night) icon = 'fa fa-sun-o';
  return <i className={icon} onClick={onClick}></i>;
};

export default Night;
