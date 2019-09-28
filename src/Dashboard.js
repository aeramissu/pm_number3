import React , {Component} from 'react' 

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <center>
                <h1>
                    WELCOME!
                </h1>
                <div>Hello {this.props.name}</div>
            </center>
        )
    }
}

export default Dashboard;