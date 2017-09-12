import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state text',
    };
  }

  update(e) {
    this.setState({txt: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)}/>
      </div>
    );
  }
}

const Widget = (props) => {
  return (
    <input type="text" onChange={props.update}/>
  );
};

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
};

App.defaultProps = {
  txt: 'this is the default txt'
};

export default App;
