//code by Jeremiah Faluyi
//This is a JavaScript Write-On Effect


//Async Timeout Function
const delay = wait => new Promise(res => setTimeout(res, wait)); 

const write = async (setstate, text, delayTime=500, waitTime=1000) => {
    //Get each character from text
    let temp = "";
    for(let x in text){
        temp += text[x];

        await delay(delayTime);
        setstate(temp + "|");
    }
    //pause 
    await delay(waitTime);
    //erase
    await erase(setstate, text, delayTime);

    return;
}

const erase = async (setstate, text, delayTime) => {
    //Loop through the text backwards
    for (let i = text.length - 1; i >= 0; i--){
        //pause
        await delay(delayTime);
        //Slice the text
        //Add the pipe after the last character
        setstate(text.slice(0, i) + "|");
    }
    return;
}

const writeOn = async (setstate, text=null, list=null, loopTimes=null, delayTime=500, waitTime=1000) => {
    //pointer variable
    let i = 0;

    //check if a Text was passed in
    if (text){
        while (true){
            if (loopTimes && i === loopTimes - 1) break;
            await write(setstate, text, delayTime, waitTime);
            i++;
        }
    }
    
    //check if an Array was passed in
    if (list) {
        let j = 0;
        while (true){
            if (loopTimes && i === loopTimes) break;
            await write(setstate, list[j], delayTime, waitTime);
            j++;
            if (j === list.length){
                j = 0;
                i++;
            }
        }
    }
}


export default writeOn;