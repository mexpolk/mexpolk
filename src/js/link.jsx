'use strict';

var React = require('react/addons');

module.exports = React.createClass({

    render: function () {
      var css = {
        display: 'inline-block'
      };

      return (
        <div className="link" style={css}>
          {this.renderLink()}
          <span className="visible-print-inline">{this.props.shorten ? this.props.shortUrl : this.props.url }</span>
        </div>
      );
    },

    renderLink: function () {
      if (this.props.url) {
        return (
          <a href={this.props.shortUrl} className="hidden-print text-overflow" target="_blank">
            {this.props.label}
          </a>
        );
      }
    }

});
