import React,{Component} from "react";

import Cards from '../Components/Cards';
import SearchBar from '../Components/SearchBar';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';

import './app.css';

class App extends Component{

    constructor()
    {
        super()
        this.state={
            robots:[],
            searchfield : ''
        }
    }
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots : users}));
    }
    onSearchChange = (e) => {
            this.setState({searchfield : e.target.value});
    }

    render()
    {
        const {robots,searchfield} = this.state;
        const robotsfiltred = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchfield);
        });
        return !robots.length ?
         <h1 className="tc">Laoding ...</h1> :              
        (
            <div className="tc">
                <h1 className="f1">mr robot</h1>
                <SearchBar onChange = {this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <Cards  robots = {robotsfiltred}/>
                    </ErrorBoundry>                        
                </Scroll>
            </div>
        )
    }

}



export default App;
