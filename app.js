const heading = React.createElement("h1",{id: "heading", xyz: "abc"},"Hello World from React");
const parent = React.createElement("div",{id: "parent"},
    [React.createElement("div",{id: "child1"},
    [React.createElement("h1",{},"I AM heading"),
    React.createElement("h2",{},"I AM h2")]),
    React.createElement("div",{id: "child2"},
        [React.createElement("h1",{},"I AM heading"),
        React.createElement("h2",{},"I AM h2")])
])

console.log(heading,"jnj")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)