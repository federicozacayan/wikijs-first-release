import getFromBetween, {getComments} from './getFromBetween.js'

export default class Render{
    static process(parentNode, data, instance){
        let original = data;
        let comments = getFromBetween.get(data,'/*','*/')
        if(comments.length!=0){
            let j = JSON.parse(comments[0]);
            let code = comments.map(comment=>{
                data = data.replace(`/*${comment}*/`, '')
            })
            
            let out = '';
            let codeList = []
            for (let index in j) {
                if(j[index][0] == 'lines'){
                    let where = j[index][1].split('-')
                    let eachLine = original.split("\n");
                    let code = []
                    for (let l = where[0]*1-1; l < where[1]*1; l++) {
                        code.push(eachLine[l])
                    }
                    codeList.push([j[index][1],code.join("\n")])
                    let pre = document.createElement('pre')
                    out +=`<pre class="lines${j[index][1]}"></pre>`
                } else  if(j[index][0] == 'next'){
                    instance.state = { ...instance.state, next: j[index][1]*1 };
                } else  if(j[index][0] == 'prev'){
                    instance.state = { ...instance.state, prev: j[index][1]*1 };
                } else {
                    out +=`<${j[index][0]}>${j[index][1]}</${j[index][0]}>`;  
                }
                
            }
            parentNode.querySelector('.explanation').innerHTML = out
            for (let index = 0; index < codeList.length; index++) {
                parentNode.querySelector('.lines'+codeList[index][0]).innerText = codeList[index][1]
            }
        }
        return data
    }
}