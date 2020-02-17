import Component from '../../../kiwi/Component.js'

class App extends Component {
    template(){
        return `<div>Hello World</div>`
    }
}

export default App;
/*[
    ["h1","Instalation"],
    ["lines","36-53"],
    ["h2","Explanation"],
    ["p","into your HTML file you have to have an elemenent where you will insert the components."],
    ["p","In this case is a 'div' with an '.app' class."],
    ["lines","41-41"],
    ["h2","Import the library."],
    ["p","You can use the library located in github."],
    ["lines","44-44"],
    ["h2","ECMAScript 6 Modules."],
    ["p","Remember this is a ES6 module, so do not forget place the 'module' type attribute into the script tag."],
    ["lines","43-43"],
    ["p","You can write a module in other file."],
    ["lines","56-56"],
    ["p","Asuming you have the library in '../../../kiwi/Component.js'"],
    ["lines","1-1"],
    ["p","The code of your module  could be:"],
    
    ["prev","10"],
    ["next","1"]

    


]*//*
<!DOCTYPE html>
<head>
    <title>Document</title>
</head>
<body>
    <div class="app"></div>
</body>
<script type="module">
import Componet from 'https://federicozacayan.github.io/wikijs-first-release/kiwi/Component.js'
class App extends Componet{
    template(){
        return `<h1>Hello World</h1>`
    }
}
let content = new App();
content.querySelector('.app')
</script>
</html>


<script type="module" src="App.js"></script>

*/