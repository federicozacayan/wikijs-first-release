import Component from '../../../kiwi/Component.js'

class App extends Component {
    template(){
        return `<div>Hello World</div>`
    }
}

export default App;
/*[
    ["h1","Start"],
    ["lines","31-35"],
    ["h2","Explanation"],
    ["p","The Component Class is the parent class of any component of this library."],
    ["p","This Class has a querySelector method to insert the node component in a specific node of the document.body"],
    ["lines","35-35"],
    ["p","In this way, the following component will render 'Hello World' into the '.app' element."],
    ["lines","1-9"],
   


    ["p","Full Code:"],
    ["lines","37-53"],
    
    ["prev","0"],
    ["next","2"]
]*//*
<script type="module" src="App.js"></script>


import App from './App.js';

let content = new App();

content.querySelector('.app')

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Kiwi JS Framework</title>
</head>
<body>
    <div class="app"></div>
</body>
<script type="module">
    import App from './App.js';
    let content = new App();
    content.querySelector('.app')
</script>
</html>
*/