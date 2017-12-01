import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{

    renderWeather(cityData){
        const cityName = cityData.city.name;
        //const temps = cityData.list.map(weather => weather.main.temp);
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273 );        
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        //const lat = cityData.city.coord.lat;
        //const lon = cityData.city.coord.lon;
        const {lat, lon} = cityData.city.coord;

        return(
            <tr key={cityName}>
                <td>{<GoogleMap lat={lat} lon={lon}/>}</td>
                <td><Chart data={temps} color='red' units='C' /></td>
                <td><Chart data={pressures} color='green' units='hPa'/></td>
                <td><Chart data={humidities} color='blue' units='%'/></td>  
            </tr>
            
        );
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

//get state from Reducer
function mapStateToProps ({weather}){
    //return{
    //    weather: state.weather
    //};
    return {weather};
} 

export default connect(mapStateToProps)(WeatherList);