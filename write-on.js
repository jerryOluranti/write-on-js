//code by Jeremiah Faluyi
//This is a JavaScript Write-On Effect


//Async Timeout Function
const delay = wait => new Promise(res => setTimeout(res, wait)); 

const write = async (element, text, delayTime=500, waitTime=1000) => {
    let temp = "";
    for(let x in text){
        temp += text[x];

        await delay(delayTime);
        element.textContent = temp + "|";
    }
    //pause 
    await delay(waitTime);
    //erase
    await erase(element, text, delayTime);

    return;
}

const erase = async (element, text, delayTime) => {
    //Loop through the text backwards
    for (let i = text.length - 1; i >= 0; i--){
        //pause
        await delay(delayTime);
        //Slice the text
        //Add the pipe after the last character
        element.textContent = text.slice(0, i) + "|";
    }
    return;
}

const writeOn = async (element, text=null, list=null, loopTimes=null, delayTime=100, waitTime=1000) => {
    //pointer variable
    let i = 0;

    //check if a Text was passed in
    if (text){
        while (true){
            if (loopTimes && i === loopTimes) break;
            await write(element, text, delayTime, waitTime);
            i++;
        }
    }
    
    //check if an Array was passed in
    if (list) {
        let j = 0;
        while (true){
            if (loopTimes && i === loopTimes) break;
            await write(element, list[j], delayTime, waitTime);
            j++;
            if (j === list.length){
                j = 0;
                i++;
            }
        }
    }
}
