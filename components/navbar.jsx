var ReactDOM = require('react-dom')
var React = require('react')
var connect = require('react-redux').connect
var Navbar = React.createClass({
    componentDidMount: function() {
        jQuery(document).ready(function($) {
            var navbar = $('#navbar-main'),
                    distance = navbar.offset().top,
                $window = $(window);

            $window.scroll(function() {
                if ($window.scrollTop() >= distance) {
                    navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
                    $("body").css("padding-top", "70px");
                } else {
                    navbar.removeClass('navbar-fixed-top');
                    $("body").css("padding-top", "0px");
                }
            });
        });
    },
    render: function() {
    return <nav id="navbar-main" className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Sijan Blog</a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
    },    
});
module.exports = Navbar;
