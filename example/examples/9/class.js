import Component from '../../../kiwi/Component.js'

class SomeClass extends Component {
    setState() {
        return {
            n: 0
        }
    }
    addEventListener() {
        return ['click']
    }
    add(){
        this.state.n++
        this.newState = this.state
    }
    afterRender(parentNode) {
        console.log(new Date().getTime())
        document.querySelector('body').style.background = 
            '#'+Math.random().toString().substring(2,8)
        parentNode.querySelector('[click]').style.background = 
            'white'
        parentNode.querySelector('[click]').style.color = 
            '#'+Math.random().toString().substring(2,8)
    }
    template() {
        return `<div click="add">
                CLICK ME ====> ${this.state.n} <==== CLICK ME
            </div>`
    }
}

export default SomeClass;
/*[
    ["h1","After Render"],
    ["lines","1-34"],
    ["h2","Explanation"],
    ["p","After update the state of the component instance you have a life cycle hook to trigger vanilla Javascript."],
    ["p","You can access to the global scope."],
    ["lines","18-19"],
    ["p","Also, you can access directly to the component's node using its parentNode"],
    ["lines","20-21"],
    ["next","10"]
]*//*


class Component {
    constructor() {
        this.state = {}
        this.setDefaultState()
    }
    setState(){
        return {}
    }
    setDefaultState(){
        this.state = this.setState()
    }
}
*/