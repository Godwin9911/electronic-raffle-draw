import React from 'react';
import 'bootswatch/dist/journal/bootstrap.min.css';
import Selectwinners from './components/selectwinners';

class App extends React.Component {
  state = { 
    contestants: []
  }

  componentDidMount(){
    fetch('/contestants')
    .then(res => res.json())
    .then(data => {
      this.setState({contestants: data})
    })
    .catch(err => console.log(err))
  }
  render () {
    return (
      <div className="mt-2">
        <div><h1 className="text-center text-primary"><i class="fas fa-ticket-alt"></i> E-Raffle Draw</h1>
        </div>
        <Selectwinners contestants={this.state.contestants}/>
      </div>
    );
  }
}

export default App;
