import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import ReactDOM from "react-dom";
import AppolloProvider from "./ApolloProvider";


ReactDOM.render(AppolloProvider, document.getElementById("root"));