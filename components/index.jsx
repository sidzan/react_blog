var ReactDOM = require('react-dom')
var React = require('react')
var Navbar = require('./navbar')
var Navbar = require('./navbar')
var CategoryList = require('./category_list')

var Content = require('./content')
var Container = require('./container')
var connect = require('react-redux').connect
var Index = React.createClass({
    render: function() {
    	return <div className="container">

        <CategoryList/>
        <Content/>
    	</div>
    },
});
module.exports = Index;
