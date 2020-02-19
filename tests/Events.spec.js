import { Events, getMethods, on} from '../kiwi/Component'
import Component from '../kiwi/Component'

describe('Testing Events', () => {
    // hasEventListener
    // getNodeList
    // addEventNode
    
    
    it('Old innertext', () => {
        let out = 'fail'
        let node = document.createElement('span')
        node.setAttribute('click', 'm1')
        const obj = {m1:()=>{out = 'ok'}}
        Events.addEventNode(node, obj )
        node.click()
        expect(out).toBe('ok');
    })
   
    it('Testing getNodeList', () => {
        let node = document.createElement('span')
        node.innerText = 'ok'
        node.setAttribute('abc123','whatever')
        const obj = {addEventListener:()=>['abc123']}
        let out = Events.getNodeList(node, obj )
        expect(out[0].innerText).toBe('ok');
    })

    
    it('Testing hasEventListener true', () => {
        const obj = {addEventListener:()=>['abc123']}
        expect(Events.hasEventListener(obj)).toBeTruthy();
    })

    it('Testing hasEventListener false', () => {
        const obj = {addEventListener:()=>[]}
        expect(Events.hasEventListener(obj)).toBe(false);
    })

    it('Testing addEvents fail', () => {
        let out = 'fail'
        let node = document.createElement('span')
        node.setAttribute('click', 'm1')
        const obj = {
            addEventListener:()=>['click'],
            m1:()=>{out = 'ok'}
        }
        Events.addEvents(node, obj)
        // node.click()
        expect(out).toBe('fail');
    })

    it('Testing addEvents ok', () => {
        let out = 'fail'
        let node = document.createElement('span')
        node.setAttribute('click', 'm1')
        const obj = {
            addEventListener:()=>['click'],
            m1:()=>{out = 'ok'}
        }
        Events.addEvents(node, obj)
        node.click()
        expect(out).toBe('ok');
    })


    it('Testing addEventListener', () => {
        let a = new Component();
        expect(Array.isArray(a.addEventListener())).toBe(true);
    })
    it('Testing addEventListener', () => {
        let a = new Component();
        expect(a.addEventListener().length).toBe(0);
    })

})
