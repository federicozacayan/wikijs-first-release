import Component, {CoreProperties, getMethods} from '../kiwi/Component'
import App, {App2, BadTag} from './AppSetPropIntoChild'

describe('Testing CoreProperties', () => {
    
    it('Testing getProps ', ()=>{
        let node = document.createElement('p')
        node.setAttribute('a','A')
        let list = CoreProperties.getProps(node)
        expect(list.a).toBe('A');
    })
    
    it('Testing getMethods ', ()=>{
        //todo rename getFromMethod instead of getMethods
        let props = {'m1':'m1'}
        class Obj{
            m1(){
                return 'ok'
            }
        }
        let obj = new Obj()
        let list = CoreProperties.getMethods(props, obj)
        expect(list.m1).toBe('ok');
    })

    it('Testing getMethods 2', ()=>{
        let props = {'m1':'m1'}
        window.out = 'fail'
        class Obj2{
            m1(){
                return () =>{
                    window.out = 'ok'
                }
            }
        }
        let obj = new Obj2()
        let list = CoreProperties.getMethods(props, obj)
        list.m1()
        expect(window.out).toBe('ok');
    })

    

    it('Testing setPropIntoChild 1', ()=>{
        let a = new App();
        document.querySelector('body').innerHTML = ''
        a.querySelector('body')
        let out = document.querySelector('li:first-child').innerText == 'Get started'
        expect(out).toBe(true);
    })

    it('Testing setPropIntoChild 2', ()=>{
        let a = new App2();
        document.querySelector('body').innerHTML = ''
        a.querySelector('body')
        let out = document.querySelector('li:first-child').innerText == 'Home'
        expect(out).toBe(true);
    })

    it('Testing setProp', ()=>{
        let a = new Component();
        a.setProp('body')
        expect(a.prop).toBe('body');
    })
        
})
