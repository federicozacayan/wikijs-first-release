import Component from '../../../kiwi/Component.js'

class Header extends Component {
    template() {
        return `<ul>
            <li>${this.prop.links1[0]}</li>
            <li>${this.prop.links1[1]}</li>
        </ul>`
    }
}

class SomeClass extends Component {
    setChildComponent() {
        return Header;
    }
    links2() {
        return [
            'Get started',
            'Documentation',
        ];
    }
    template() {
        return `<Header links1="links2"></Header>`
    }
}

export default SomeClass;
/*[
    ["h1","Properties"],
    ["lines","1-27"],
    ["h2","Explanation"],
    ["p","the properties are method that return data to used into the subcomponent."],
    ["p","The names of the properties are any attribute name. In this example 'links1'."],
    ["lines","22-24"],
    ["p","The Values of the properties are the return of any method of the component instance. In this example 'links2'."],
    ["lines","16-21"],
    ["p","The properties are automatically detected and availables to use into the subcomponent."],
    ["lines","3-10"],
    ["p","Full Code:"],
    ["next","6"]
]*//*

*/