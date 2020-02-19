import { SmartRefresh } from '../kiwi/Component'

describe('Testing SmartRefresh', () => {


    it('Old innertext', () => {
        let parent = document.createElement('span')
        let oldNode = document.createElement('p')
        oldNode.innerText = 'oldNode';
        let newNode = document.createElement('p')
        newNode.innerText = 'newNode';
        let obj = {
            freshNode: oldNode,
            exec: (p) => {
                return newNode
            },
            beforeRender: (parentNode) => { },
            afterRender: () => { },
        }
        parent.appendChild(obj.freshNode)
        // SmartRefresh.update(obj)
        expect(parent.firstChild.innerText).toBe('oldNode');
    })

    it('New innertext', () => {
        let parent = document.createElement('span')
        let oldNode = document.createElement('p')
        oldNode.innerText = 'oldNode';
        let newNode = document.createElement('p')
        newNode.innerText = 'newNode';
        let obj = {
            freshNode: oldNode,
            exec: (p) => {
                return newNode
            },
            beforeRender: (parentNode) => { },
            afterRender: () => { },
        }
        parent.appendChild(obj.freshNode)
        SmartRefresh.update(obj)
        expect(parent.firstChild.innerText).toBe('newNode');
    })


})
