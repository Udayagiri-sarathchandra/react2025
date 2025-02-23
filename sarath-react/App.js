// const heading = React.createElement("h1", { id: "heading" }, "hello simply");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "hello simply"),
    React.createElement("h2", {}, "hello Yogini"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hello Angry"),
    React.createElement("h2", {}, "hello Sarath"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
