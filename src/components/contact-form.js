import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", name: "", subject: "", description: "", status: 2, priority:1};
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = event => {
    event.preventDefault();
 
    axios
      .post(
        "https://jobcorehelp.freshdesk.com/api/v2/tickets",
        this.state,
        { auth: {
            username: process.env.FRESHDESK_API_KEY,
            password: "x"
        }},
        { headers: { Accept: "application/json"} }
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    
    return (
      <div className="App">
        <form className="p-5 shadow w-600px " onSubmit={this.handleSubmit}>
                <h2 className="mb-4 mt-2">Get In Touch</h2>
                <div className="form-row">
                    <div className="col form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter name"
                            name="name"
                            onChange={this.handleChange}
                        />                        
                    </div>
                </div>
                <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            id="email"
                            name="email"
                            onChange={this.handleChange}
                        />     
                </div>
                <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                            name="subject"
                            onChange={this.handleChange}
                        />     
                </div>
 
                <div className="form-group">
                    <textarea className="form-control" name="description" id="description" onChange={this.handleChange} rows="4" type="text" placeholder="Your Message" />
                </div>
                <div className="text-right">
                    <button className="btn radius btn-purple mt-3 my-2 ml-2 px-5 py-3">
                        Send Now
                    </button>
                </div>
        </form>          
      </div>
    );
  }
}

