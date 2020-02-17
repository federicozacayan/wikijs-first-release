const getMethods = (obj) => {
    let properties = new Set()
    let currentObj = obj
    do {
        Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
    } while ((currentObj = Object.getPrototypeOf(currentObj)))
    return [...properties.keys()].filter(item => typeof obj[item] === 'function')
}

const on = (n, event, func) => {
    n.removeEventListener(event, func);
    n.addEventListener(event, func);
}

class SmartRefresh {
    static update(that) {
        let old = that.freshNode;
        let newNode = that.exec(true);
        let parentNode = document.createElement('div')
        parentNode.appendChild(newNode)
        that.beforeRender(parentNode)
        old.parentNode.replaceChild(newNode, old)
        old.remove();
        that.afterRender(newNode.parentNode)
    }
}

class Events {
    static addEvents(node, instance) {

        if (this.hasEventListener(instance)) {
            
            let nodeList = this.getNodeList(node, instance)
            
            for (let index = 0; index < nodeList.length; index++) {
                const node = nodeList[index];
                this.addEventNode(node, instance)
            }
        }
        return node
    }

    static hasEventListener(instance){
        return instance.addEventListener().length !== 0
    }

    static getNodeList(node, instance) {
        let selector = instance.addEventListener().map(a => '[' + a + ']');
        let el = document.createElement('div')
        el.appendChild(node)
        let out = el.querySelectorAll(selector.join(', '))
        return out
    }

    static addEventNode(node, instance){
        let methods = getMethods(instance)
        for (let index = 0; index < node.attributes.length; index++) {
            if (methods.includes(node.attributes[index].value)) {
                on(node, node.attributes[index].name, (e) => instance[node.attributes[index].value].call(instance, e))
            }
        }
    }
}


class CoreProperties{
    static getProps(node){
        
        let props = {}
        for (let index = 0; index < node.attributes.length; index++) {
            props[node.attributes[index].name] = node.attributes[index].value;
        }
        
        return props
    }

    static getMethods(props, parentInstance){
        let methods = getMethods(parentInstance);
        for (const prop in props) {
            if(methods.includes(props[prop])){
                props[prop] = parentInstance[props[prop]].call(parentInstance)
            }
        }
        return props
    }
}
class Component {
    constructor() {
        this.childComponent = []
        this.node_subComponentList = []
        this.freshNode = null
        this.coreProperties = null
        this.state = {}
        this.prop = {}
        this.setDefaultState()
        this.tdd = true
        this.singleElement = true
        
    }
    setState(){
        return {}
    }
    setDefaultState(){
        this.state = this.setState()
    }
    set newState(val) {
        // console.log('old:',this.state, 'new:',val)
        this.state = val;
        SmartRefresh.update(this)
    }
    afterRender(parentNode) {
        //to be overwriten
    }
    beforeRender(parentNode) {
        //to be overwriten
    }

    addEventListener() {
        return [];
    }

    setPropIntoChild(node, parentInstace) {
        let props = CoreProperties.getProps(node)
        return (Object.keys(props).length === 0) ? props : CoreProperties.getMethods(props, parentInstace);
    }

    setProp(prop) {
        this.prop = prop
    }

    validateTemplate() {
        let template = this.template();
        if (template.search('/>') > -1) {
            throw new Error('Self close tag is not allow');
        }
        return template;
    }
    templateToNode() {
        let node = new DOMParser().parseFromString(this.validateTemplate(), 'text/html')
        this.freshNode = node.body.firstChild
        if(this.freshNode.children.length === 0){
            this.singleElement = true
        } else {
            this.singleElement = false
        }
        return this.freshNode;
    }
    saveChildComponent() {
        let components = this.setChildComponent()
        this.childComponent = (Array.isArray(components)) ? components : [components];
    }
    setChildComponent() {
        return [];
    }

    getNodeListComponents() {
        let node = this.templateToNode()
        let listComponent = this.childComponent.map(component => {
            return component.name
        })
        // console.log(listComponent)
        
        let selector = (listComponent.join(', '))
        let div = document.createElement('div')
        div.appendChild(node)
        let out = div.querySelectorAll(selector)
        // console.log(out)
        return out
    }

    getMatchNodeWithSubComponents() {
        let nodes = this.getNodeListComponents();
        let that = this;
        let node_subComponentList = this.node_subComponentList;
        [].forEach.call(nodes, function (node) {
            for (let index = 0; index < that.childComponent.length; index++) {
                const component = that.childComponent[index];
                if (node.tagName == component.name.toUpperCase()) {

                    let instanceComponet = new (component)
                    /* before node creation start */

                    let props = that.setPropIntoChild(node, that)
                    
                    instanceComponet.setProp(props)
                    /* before node creation end */
                    node_subComponentList.push([node, instanceComponet.getNode()])
                }
            }
        })
    }

    getFinalNode() {
        if (this.singleElement) {
            let array = this.node_subComponentList[0]
            array[0].parentNode.replaceChild(array[1], array[0]);
            this.freshNode = this.node_subComponentList[0][1]
        } else {
            for (let index = 0; index < this.node_subComponentList.length; index++) {
                const element = this.node_subComponentList[index];
                if(
                    element[0].parentNode == null
                    ||
                    typeof element[0].parentNode == 'undefined'
                ){
                    let tmp = document.createElement('div')
                    tmp.appendChild(element[0])
                }
                element[0].parentNode.replaceChild(element[1], element[0]);
            }
        }

        return this.freshNode
    }


    getNode() {
        if (this.childComponent.length === 0) {
            return this.templateToNode()
        }
    }

    querySelector(selector){
        document.querySelector(selector).appendChild(this.exec())
        this.tdd = false;
    }

    exec(rerender) {
        this.saveChildComponent()
        if (this.childComponent.length === 0) {
            this.firstRender(rerender);
            return Events.addEvents(this.templateToNode(), this)
        }

        // this.getNodeListComponents()
        this.getMatchNodeWithSubComponents()
        this.freshNode = Events.addEvents(this.freshNode, this)
        if (typeof rerender == 'undefined') {
            this.firstRender();
        }
        return this.getFinalNode();
    }

    firstRender(rerender) {
        if (typeof rerender == 'undefined') {
            setTimeout(() => this.delayFirstRenderExecution(), 1)
        }
    }

    delayFirstRenderExecution(){
        if(this.tdd){
            return
        }
        this.justOnce(this.freshNode.parentNode)
        this.afterRender(this.freshNode.parentNode);
    }

    

    justOnce(){
        //to overwrite
    }

    map(name, callback){
        return this.prop[name].map(callback).toString().replace(",", "")
    }
}

export default Component 