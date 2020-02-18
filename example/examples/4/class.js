import Component from '../../../kiwi/Component.js'

class Header extends Component {
    template() {
        return `<ul>
            <li>Home</li>
            <li>Porfolio</li>
            <li>Contact us</li>
        </ul>`
    }
}

class SomeClass extends Component {
    setChildComponent() {
        return Header;
    }
    template() {
        return `<Header></Header>`
    }
}

export default SomeClass;
/*[
    ["h1","SubComponent"],
    ["lines","1-22"],
    ["h2","Explanation"],
    ["p","To load a SubComponent you have to register only one subcomponent into the method setChildComponent."],
    ["lines","14-16"],
    ["p","Alternatively, you can set an Array of Subcomponents if you have more than one."],
    ["lines","38-40"],
    ["p","Self closed Tags are not availables for Components in the early version of this framework."],
    ["lines","43-45"],
    ["p","The correct way to set up a Subcomponent is with two tags."],
    ["lines","17-19"],
    ["p","Full Code"],
    ["next","5"]
]*//*
    setChildComponent() {
        return [Header];
    }

    //not available
    template() {
        return `<Header/>`
    }

*/