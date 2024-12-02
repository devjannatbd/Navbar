

const Navbar = ({route}) => {

  const{id,path,element} =route
  return (
    <div>
      <a href={element}>{path}</a>
    </div>
  );
};

export default Navbar;