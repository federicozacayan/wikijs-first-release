import Component from '../../../kiwi/Component.js'

class SomeClass extends Component {
    template(){
        return `<div>Hello World</div>`
    }
}

export default SomeClass;
/*[
    ["h1","Component"],
    ["p","This is a simple component. It just has to extend th component class."],
    ["lines","3-3"],
    ["p","The template is a string. It is high recommended use wrap your string in back-ticks, like this `string`."],
    ["p","Using `back-ticks` you can interpolate variables or function that return strings"],
    ["i","In adition, you can use break lines into the string!"],
    ["prev","1"],
    ["next","3"],
    ["lines","4-6"]
]*/


