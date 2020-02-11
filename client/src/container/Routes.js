import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home, Header, NewItem, Signup, Statistic, Wardrobe } from "../Route"

class Routes extends React.Component {
    render() {
        return (
            <div id="content" className="container-fluid">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/wardrobe" component={Wardrobe} />
                    {/* <Route exact path="/item" component={Item} /> */}
                    <Route exact path="/new" component={NewItem} />
                    <Route exact path="/statistic" component={Statistic} />
                </Switch>
            </div>
        )
    }
}
export default Routes;