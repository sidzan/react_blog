var React = require('react')

var Layout = React.createClass({
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
		return <div>
		<header className="page-header">
            <blockquote>
                <p>“A wise man can learn more from a foolish question than a fool can learn from a wise answer.” </p>
                <footer>Bruce Lee</footer>
            </blockquote>
		</header>
			<nav id="navbar-main" className="navbar navbar-default">
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
			{this.props.children}
		</div>
	}
})
module.exports = Layout
