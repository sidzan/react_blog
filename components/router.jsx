var ReactDOM = require('react-dom')
var React = require('react')
var Router=require('react-router').Router
var Route=require('react-router').Route
var IndexRoute=require('react-router').IndexRoute
var Index = require('./index')
var Layout = require('./layout')
var Content = require('./content')
var Landing = require('./landing')

var createBrowserHistory = require('history/lib/createBrowserHistory')
var history = createBrowserHistory()

var Router1 = React.createClass({
	render: function() {
		return <Router history={history}>
            <Route path="/" component={Landing}/>
            <Route path="index" component={Layout}>
                <IndexRoute component={Index}/>
				<Route path="content" component={Content}/>
            </Route>
        </Router>
	}
});

module.exports = Router1;
