var ReactDOM = require('react-dom')
var React = require('react')
var RPC = require('../RPC')
var connect = require('react-redux').connect
var ContentData= React.createClass({
    render: function() {
        data = this.props.info;
        console.log(data);
    	return <div className="content">
                <div className="content_body">
                    <h1 className="text-uppercase">{data.title}</h1><span>{data.create_time}</span>
                    <hr/>
                    <p>
                    {data.body}
                    </p>
                    <p id="paragraph_footer">This is the footer. Can have special texts. Will be displayed only of there is any documetns in footer.</p>
                    <hr/>
                    <div className="visitor_box">
                        <form><span className="label label-default">Leave a Reply </span>
                            <input className="form-control input-sm" type="email" placeholder="Place your email"/>
                            <div className="form-group">
                                <textarea className="form-control input-sm" rows="2" placeholder="Your Comment"></textarea>
                            </div>
                            <button className="btn btn-success btn-sm" type="button">Submit </button>
                        </form>
                        <div className="previous_replies">
                            <h5>Sijan replied:</h5>
                            <p className="bg-info">Paragraph</p>
                        </div>
                    </div>
                </div>
            </div>
	},    
});

module.exports = ContentData;
