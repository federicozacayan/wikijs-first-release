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
    template() {
        return `<div>
            <div click="add">
                CLICK ME ====> ${this.state.n} <==== CLICK ME
            </div>
        </div>`
    }
}

export default SomeClass;
/*[
    ["h1","State"],
    ["lines","1-25"],
    ["h2","Explanation"],
    ["p","The state is a special attribute that allows refresh the component visualisation when the this.newState is updated."],
    ["p","The component constructor calls the setState method in order to set the attribute this.state."],
    ["lines","50-61"],
    ["p","You have to overwrite the setState method to set the values when the instace is created."],
    ["lines","4-8"],
    ["p","Register the event."],
    ["lines","9-11"],
    ["p","Set the template."],
    ["lines","16-22"],
    ["p","Set the callback method."],
    ["lines","12-15"],
    ["p","The way recomended to update the state and refresh the component is updating this.state first."],
    ["lines","13-13"],
    ["p","And then, set this.newState."],
    ["lines","14-14"],
    ["p","Full Code:"],
    ["next","8"]
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