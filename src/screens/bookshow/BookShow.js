import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header'
import Home from '../home/Home';
import './BookShow.css';
import Typography from '@material-ui/core/Typography';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText' ;

class BookShow extends Component {

    constructor() {
        super();
        this.state = {
            location: "",
            language: "",
            showDate: "",
            showTime: "",
            tickets: 0,
            unitPrice: 500,
            availableTickets: 20,                    
            reqLocation: "dispNone",
            reqLanguage: "dispNone",
            reqShowDate: "dispNone",
            reqShowTime: "dispNone",
            reqTickets: "dispNone"
        }
    }

    backtoDetailsHandler = () => {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }

    locationChangeHandler = event => {
        this.setState({ location: event.target.value });
    }

    languageChangeHandler = event => {
        this.setState({ language: event.target.value });
    }

    showDateChangeHandler = event => {
        this.setState({ showDate: event.target.value });
    }

    showTimeChangeHandler = event => {
        this.setState({ showTime: event.target.value });
    }

    ticketsChangeHandler = event => {
        this.setState({ tickets: event.target.value });
    }

    bookShowButtonHandler = () => {
        this.state.location === "" ? this.setState({ reqLocation: "dispBlock" }) : this.setState({ reqLocation: "dispNone" });
        this.state.language === "" ? this.setState({ reqLanguage: "dispBlock" }) : this.setState({ reqLanguage: "dispNone" });
        this.state.showDate === "" ? this.setState({ reqShowDate: "dispBlock" }) : this.setState({ reqShowDate: "dispNone" });
        this.state.showTime === "" ? this.setState({ reqShowTime: "dispBlock" }) : this.setState({ reqShowTime: "dispNone" });
        this.state.tickets === 0 ? this.setState({ reqTickets: "dispBlock" }) : this.setState({ reqTickets: "dispNone" });
    }

    render() {

        return (
            <div>
                <Header />
                <div className="bookShow">
                    <Typography className="back" onClick={this.backtoDetailsHandler}>
                        &#60; Back to Movie Details
                    </Typography>
                    <Card className="cardStyle" >
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                BOOK SHOW
                            </Typography> <br />

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="location"> Choose Location: </InputLabel>
                                <Select
                                    value={this.state.location}
                                    onChange={this.locationChangeHandler} >
                                    {location.map(loc => (
                                        <MenuItem key={"loc" + loc.id} value={loc.location}>
                                            {loc.location}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText className = {this.state.reqLocation}><span className ="red">required</span></FormHelperText> 
              

                            </FormControl>

                            <FormControl required className="formControl">

                                <InputLabel htmlFor="language"> Choose Language: </InputLabel>
                                <Select
                                    value={this.state.language}
                                    onChange={this.languageChangeHandler} >
                                    {language.map(loc => (
                                        <MenuItem key={"lan" + loc.id} value={loc.language}>
                                            {loc.language}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText className = {this.state.reqLanguage}><span className ="red">required</span></FormHelperText> 
                            </FormControl>


                            <FormControl required className="formControl">

                                <InputLabel htmlFor="showDate"> Choose Date: </InputLabel>
                                <Select
                                    value={this.state.showDate}
                                    onChange={this.showTimeChangeHandler} >
                                    {showTime.map(loc => (
                                        <MenuItem key={"loc" + loc.id} value={loc.showTDate}>
                                            {loc.showTime}
                                        </MenuItem>
                                    ))}
                                <FormHelperText className = {this.state.reqShowDate}><span className ="red">required</span></FormHelperText> 
                                </Select>
                            </FormControl>

                            <FormControl required className="formControl">

                                <InputLabel htmlFor="showTime"> Choose Time: </InputLabel>
                                <Select
                                    value={this.state.showTime}
                                    onChange={this.showDateChangeHandler} >
                                    {showDate.map(loc => (
                                        <MenuItem key={"loc" + loc.id} value={loc.showTime}>
                                            {loc.showDate}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText className = {this.state.reqShowTime}><span className ="red">required</span></FormHelperText> 

                            </FormControl>

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="tickets"> Tickets: ({this.state.availableTickets} available)</InputLabel>
                                <Input id="tickets" value={this.state.tickets != 0 ? this.state.tickets : ""} onChange=
                                    {this.ticketsChangeHandler} />
                                    <FormHelperText className = {this.state.location}><span className ="red">required</span></FormHelperText> 
                            </FormControl> <br /><br />

                            <Typography>
                                Unit Price: Rs. {this.state.unitPrice}
                            </Typography><br />

                            <Typography>
                                Total Price: Rs. {this.state.unitPrice * this.state.tickets}
                            </Typography> <br /><br />

                            <Button variant = "contained" onClick = {this.bookShowButtonHandler}
                            color = "primary">BOOK SHOW</Button>

                        </CardContent>
                    </Card>
                </div>

            </div>
        );
    }
}

export default BookShow;
