import React from 'react';

const Header = (props) => {
  return (
    <header className="top">
      <h1> Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
          Day
        </span>
      </h1>
      <h3 className="tagline"><span>{props.tagline}</span></h3>
    </header>
  );
}

Header.propTypes = {
  tagline: React.PropTypes.string.isRequired,
};
//a little confused why I cannot `export default` at the object declaration directly, just as with classes... ugh
export default Header;
