import Component from '../../../kiwi/Component.js'

class SomeClass extends Component {
    setState() {
        return {
            n: JSON.parse(localStorage.getItem('n')) || 0
        }
    }
    addEventListener() {
        return ['click']
    }
    add(){
        this.state.n++
        localStorage.setItem('n', JSON.stringify(this.state.n));
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
    ["h1","Local Storage"],
    ["lines","1-23"],
    ["h2","Explanation"],
    ["p","To persist data into the browser you can use setState method and assign a value by default."],
    ["lines","4-8"],
    ["p","Before refresh the component is a good place to update the local storage."],
    ["lines","12-16"],
    ["p","In this way tha n state increment and never reset to the default value 0."],
    ["next","9"]
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