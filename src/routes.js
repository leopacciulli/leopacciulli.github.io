import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import BeTheHero from "./pages/Projects/BeTheHero";
import HairShop from "./pages/Projects/HairShop";
import Weather from "./pages/Projects/Weather";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/project/beTheHero" component={BeTheHero} exact />
                <Route path="/project/hairShop" component={HairShop} exact />
                <Route path="/project/weather" component={Weather} exact />
                <Route path="/*" component={() => <Redirect to='/' />} />
            </Switch>
        </BrowserRouter>
    );
}
