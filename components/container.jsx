var ReactDOM = require('react-dom')
var React = require('react')
var CategoriesList = require('./category_list')
var Content = require('./content')
var Container= React.createClass({
    render: function() {
        console.log("container");
		return <div className="Container">
    			<CategoriesList/>
    			<Content/>
    		</div>
    	  },    
});
module.exports = Container;
