import {on, getMethods} from '../kiwi/Component'

describe('Testing tools:', () => {

    it('should list class methods', ()=>{
        class A{
            run(){ return true; }
        }
        let a = new A()
        let methods = getMethods(a);
        expect(methods.indexOf('run') > -1).toBeTruthy();
    })

    it('should add listener event', ()=>{
        let div = document.createElement('div')
        let output = false
        let callback = () => {
            output = true;
        }
        on(div, 'click', callback)
        div.click()
        expect(output).toBeTruthy();
    })
})
