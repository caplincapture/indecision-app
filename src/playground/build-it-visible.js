console.log('App.js is running!')

// render new p tag - if options.length > 0 "Here are your options" "No Options"

const appRoot = document.getElementById('app');

let visibility = false;

const toggleVisibilty = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibilty}>
                {visibility ? 'Hide Details' : 'Show Details'} 
            </button>
            {visibility && (
                <div>
                    <p> Hey. These are some details you can now see! </p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};
render();