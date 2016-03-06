var ReactDOM = require('react-dom')
var React = require('react')
var connect = require('react-redux').connect
var RPC = require('../RPC')
var CategoriesList = React.createClass({
    getInitialState :function(){
        return {};
    },
    componentDidMount: function(){
        console.log("called");
        var that=this;
        RPC.execute("category","search_read_path",[[],["name"]],{},function(err,data) {
            this.setState({data:data});
        }.bind(this));
    },
    render: function() {
        var data = this.state.data
        if (!data) return <div>Loading</div>;
        console.log("data is ",data,data.length);
    	return <div className="col-md-2 col-sm-2 hidden-xs">
            <h5><strong><span >Categories </span></strong></h5>
            <ul className="list-group">
                {data.map(function(dataItem){
                    return <li className="list-group-item"><span>{dataItem.name} </span></li>
                }.bind(this))}
            </ul>

        </div>
    	    },
});
module.exports = CategoriesList;
