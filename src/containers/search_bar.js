import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {term:''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    };

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input placeholder="Input the city name" 
                className="form-control"
                value={this.state.term} onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary" >Submit</button>
                </span>
            </form>
        );
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
}

//put null to the 1st argument, means whenever we are passing a function that is
//supposed to map our dispatch to the props of our container, it always go to the 2nd argument
//we don't need to aware of the state in the class, just pass in something to the function in actionCreator, so pull null
export default connect(null,mapDispatchToProps)(SearchBar);