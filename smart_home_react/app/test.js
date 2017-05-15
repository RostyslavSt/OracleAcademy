// import React from '../../node_modules/react/react';

import React from "react";
import ReactDOM from "react-dom";

let list = React.createElement('h1', { id: "title" }, 'Hello world');
ReactDOM.render(list, document.querySelector(".rec"));