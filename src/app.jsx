import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/photos.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import axios from "axios";

class App extends Component {
    constructor() {
        super()
        this.state = {
            fullName: "",
            username: "",
            email: "",
            password: ""
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    //setState changes the value of what we have in state
    // based on the onChange method
    changeFullName(event) {
        this.setState({
            fullName: event.target.value
        })
    }
    changeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }
    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    onSubmit(event) {
        // prevents form from acting in a default way (refreshing whole page)
        event.preventDefault()

        //we need to send this to back as it's what's been submitted
        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        // this sends all posted data to back end:
        axios.post("http://localhost:4000/app/signup", registered)
            .then(response => console.log(response.data))

        // we then decide what to do with front end
        // form will go back to empty
        this.setState({
            fullName: "",
            username: "",
            email: "",
            password: ""
        })
        console.log(registered)
    }
    render() {

        return (
            <Router>
                <div>
                    <nav id="navbar" className="navbar navbar-expand-lg">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/signup" className="hover nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/photos" className="hover nav-link">Photos</Link>
                                </li>
                                <h1 className="navbar-center nav-item mainHeader">
                                    David Warburton Photography
                                </h1>
                                {/* <li className="nav-item">
                            <Link to="/blog" className="hover nav-link">Blog</Link>
                        </li> */}
                            </ul>
                        </div>
                    </nav>
                    <div>
                        <Switch>
                            <Route exact path="/photos">
                                <div className="blogOverview">
                                    <div className="headerBlog">
                                        <h1 className="title">
                                            My Photography Blog
                                        </h1>
                                        <h2 className="subtitle">
                                            The inspiration behind my photography ventures.
                                        </h2>
                                    </div>

                                    {/* Blog - Yarm */}
                                    <div className="blog blog1">
                                        <h3 className="blogTitle">Yarm - My Beautiful Hometown</h3>
                                        <h5>Written on 09.04.2021</h5>
                                        <p className="blogInput blogYarm">
                                            I will always be a Leeds boy at heart, born 'n' bred,
                                            but for over 20 years, Yarm in the North-East of
                                            England has become my quaint and welcoming dwelling.
                                            <br />
                                            <br />
                                            Yarm is an ancient market town, packed with welcoming
                                            cafes, restaurants, boutiques and pubs. All in one
                                            street! I would recommend a visit to anyone heading
                                            up North. Drop me a message if you want some company
                                            for a chat and coffee :-)
                                            <br />
                                            <br />
                                            Set in a huge meander in the River Tees, it offers
                                            a photographers' paradise. Not only does Yarm boast
                                            fascinating cobbled streets and shop fronts, but it's
                                            also surrounded by beautiful nature spots.
                                        </p>
                                    </div>

                                    {/* Blog - My Family */}
                                    <div className="blog blog2">
                                        <h3 className="blogTitle">My Family</h3>
                                        <h5>Written on 09.04.2021</h5>
                                        <p className="blogInput blogFamily">
                                            My family are my reason for being. And what can I say?
                                            I absolutely <span className="love">LOVE</span> taking
                                            pictures of them! Ok, so I may have a few too many,
                                            but how many photos is really too many?
                                            <br />
                                            <br />
                                            So, my beautiful wife Angela may, every now and
                                            again, get ever-so-slightly frustrated with me sticking
                                            my camera in her face! She shouldn't be so blooming
                                            photogenic then.
                                            <br />
                                            <br />
                                            As well as my son and daughter, Ben and Rebekah, I've
                                            been blessed with two stunning grandchildren, Adela and
                                            Ilay. They are simply stunning (biased, me?!) and never
                                            fail to surprise me with their ability to learn French,
                                            English and Spanish at the young ages of two and four.
                                        </p>
                                    </div>
                                </div>
                            </Route >
                            <Route path="/signup">
                                <div className="container">
                                    <div className="heading">
                                        <h2 className="mainSubtitle">
                                            I'm delighted to welcome you here on
                                            this beautiful day!
                                        </h2>
                                    </div>

                                    {/* Introduction text on home page*/}
                                    <div className="textIntro">
                                        <div className="welcome">
                                            {/* General welcome */}
                                            <h2>
                                                Welcome to my gallery
                                            </h2>
                                            <p>
                                                Since the young age of 20, I've been completely and
                                                utterly passionate about the magic that photography
                                                brings to the world, capturing those priceless moments.
                                            <br />
                                            <br />
                                                Now at the young age of 70, I feel ready to share
                                                my view of the world, captured through so many
                                                different lenses, in an endless variety of
                                                powerful situations.
                                            <br />
                                                Sports and landscapes have always been my passion.
                                                Many years ago did a lot of freelance sports photography,
                                                focussing on rugby and track and field.
                                            </p>
                                        </div>
                                        <div className="about">
                                            {/* About me info */}
                                            <h2>
                                                About Me
                                            </h2>
                                            <p>
                                                Back in the day, I had my own darkroom and all - I can still remember the smell
                                                of the fixer!! Purchased a Canon PowerShot A710 is compact
                                                in 2007 and really started to rekindle my passion for the
                                                search for the perfect shot - this will of course take more
                                                than a lifetime to find. My cameras go everywhere with me.
                                            <br />
                                            <br />
                                                I now have two Canon EOS 60D digital SLRs. I replaced the
                                                original kit lens for a Canon EFS 15-85, 10-22 and 60mm
                                                macro USM IS lenses. I also purchased a superb Manfrotto
                                                tripod so now I have no excuses - do I?!
                                            </p>
                                        </div>

                                    </div>

                                    <div className="formDiv">
                                        <h1 className="signupTitle">Sign up here to receive monthly newsletters</h1>
                                        <form onSubmit={this.onSubmit}>
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                onChange={this.changeFullName}
                                                value={this.state.fullName}
                                                className="form-control form-group"
                                            />

                                            <input
                                                type="text"
                                                placeholder="Username"
                                                onChange={this.changeUsername}
                                                value={this.state.username}
                                                className="form-control form-group"
                                            />

                                            <input
                                                type="email"
                                                placeholder="Email"
                                                onChange={this.changeEmail}
                                                value={this.state.email}
                                                className="form-control form-group"
                                            />

                                            <input
                                                type="password"
                                                placeholder="Password"
                                                onChange={this.changePassword}
                                                value={this.state.password}
                                                className="form-control form-group"
                                            />

                                            <input
                                                type="submit"
                                                value="Submit"
                                                className="btn btn-block buttonSubmit"
                                            />
                                        </form>
                                    </div>
                                </div>
                            </Route>

                            
                        </Switch>
                    </div>
                    <div className="footer">
                        <p>&copy;David Warburton Photography 2021</p>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;