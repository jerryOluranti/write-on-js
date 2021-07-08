/**
 * @file This is a JavaScript Write-On Effect
 * @author Jeremiah Faluyi <faluyijeremiah2018@gmail.com>
 */

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

/**
 * 
 * @param {elementNode} Element your HTML DOM Element
 * @param {String | Array} text The text you want to write
 * @param {Number} loopTimes Number of times to repeat the write on.
 * @param {Number} delayTime Time delay between each characters in seconds
 * @param {Number} waitTime Time to wait before erasing a text in seconds
 */
const writeOn = async (element, text = null, loopTimes = null, delayTime = 0.1, waitTime = 1) => {

    let i = 0

    // Time in milliseconds
    const newDelayTime = delayTime * 1000
    const newWaitTime = waitTime * 1000

    // Check if text was String
    if (typeof text === 'string'){
        while (true) {
            if (loopTimes && i === loopTimes) break
            await write(element, text, newDelayTime, newWaitTime)
            i++;
        }
    }
    
    // Check if text is an Array
    if (text.isArray()) {
        
        let j = 0
        
        while (true) {
            if (loopTimes && i === loopTimes) break
            await write(element, list[j], newDelayTime, newWaitTime)
            j++
            if (j === list.length) {
                j = 0
                i++
            }
        }
    }
}
