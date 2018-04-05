'use strict';

console.log('App.js is running!');

// render new p tag - if options.length > 0 "Here are your options" "No Options"

var appRoot = document.getElementById('app');

var visibility = false;

var toggleVisibilty = function toggleVisibilty() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibilty },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                ' Hey. These are some details you can now see! '
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
render();
