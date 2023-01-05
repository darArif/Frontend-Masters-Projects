const result = document.querySelector(".result");
const keys = document.querySelector(".calculator");

keys.addEventListener('click',function(e){
    const actualTarget = e.target;
    if(actualTarget.className.includes('key')) {
        if(actualTarget.className.includes('clear')) {
            if(actualTarget.className.includes('screen')) {
                result.innerText='0';
            } else if(actualTarget.className.includes('last')) {
                const str = new String(result.innerText);
                const toRemove = str[(str.length)-1];
                str = str.replace(toRemove, '');
                result.innerText = str;
            }
        } else if(actualTarget.className.includes('key-')) {
            result.innerText = actualTarget.innerText;
        }
    
    }})
