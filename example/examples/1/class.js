import Component from '../../../kiwi/Component.js'

class App extends Component {
    template(){
        return `<div>Hello World</div>`
    }
}

export default App;
/*[
    ["h1","Start"],
    ["lines","30-34"],
    ["h2","Explanation"],
    ["p","The Component Class is the parent class of any component of this library."],
    ["p","This Class has a querySelector method to insert the node component in a specific node of the document.body"],
    ["lines","1-9"],
    ["h2","ECMAScript 6 Modules."],
    ["p","This library is based in ECMAScript 6, be sure to load it as a module"],
    ["lines","25-25"],
    ["p","Full Code:"],
    ["lines","30-35"],
    ["prev","10"],
    ["next","2"]
]*//*
<script type="module" src="bundle.js"></script>




import App from './modules/App.js';

let content = new App();

content.querySelector('.app')

*/