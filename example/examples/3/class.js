import Component from '../../../kiwi/Component.js'

class SomeClass extends Component {
    addEventListener() {
        return ['click']
    }
    doSomething(e) {
        alert('Event! ' + e.target.outerHTML )
    }
    template(){
        return `<div click="doSomething">Click me</div>`
    }
}

export default SomeClass;
/*[
    ["h1","AddEventListener"],
    ["lines","1-15"],
    ["h2","Explanation"],
    ["p","To enable an event just register the event you want to use."],
    ["lines","4-6"],
    ["p","Then, create the callback method linked to that event."],
    ["lines","7-9"],
    ["p","Finally create the template maping the event as a attribute name and the method name as a callback."],
    ["lines","10-12"],
    ["p","As you can see, the param is automatically setted as an event object"],
    ["lines","7-7"],
    ["p","Full Code:"],
    ["next","4"]
]*/
