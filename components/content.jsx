var ReactDOM = require('react-dom')
var React = require('react')
var RPC = require('../RPC')
var connect = require('react-redux').connect
var ContentData = require('./content_data')
var Content= React.createClass({
    getInitialState : function(){
        return {};
    },
    componentDidMount : function(){
        console.log("called");
        var that=this;
        RPC.execute("content","search_read_path",[[],["title","body","create_time"]],{},function(err,data) {
            this.setState({data:data});
        }.bind(this));
    },
    render: function() {
        console.log("render is called");
        var data = this.state.data
        if (!data) return <div>Loading</div>;
        console.log("data is ",data,data.length);
        return (
           <div className="col-md-10 col-sm-10">
           {data.map(function(dataItem) {
           return <ContentData key={dataItem.id} info={dataItem} create_time={dataItem.create_time}/>
           }.bind(this))}
          </div>
        );
	},    
});
module.exports=(Content);
