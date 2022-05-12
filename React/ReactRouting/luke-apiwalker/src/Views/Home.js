import React from "react";
import { Link, Outlet } from "react-router-dom";
import Form from "../Components/Form";

const Home = props => {
    return (
        <div className="App">
            <main className="container mx-auto my-5">
                <div className="row justify-content-center">
                    <h1 className="display-1">Welcome to Luke API-Walker</h1>
                    <Form nav={props.nav} />
                    <div className="btn-group mt-5">
                        <Link to="/films" className="btn btn-primary">Films</Link>
                        <Link to="/people" className="btn btn-primary">People</Link>
                        <Link to="/planets" className="btn btn-primary">Planets</Link>
                        <Link to="/species" className="btn btn-primary">Species</Link>
                        <Link to="/vehicles" className="btn btn-primary">Vehicles</Link>
                        
                    </div>
                </div>
                <div className="row justify-content-center">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default Home;