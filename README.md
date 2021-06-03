# write-on-js
Write On Effect JavaScript
# ---------------------------------------------------------------------------
There are two js files in this repo: 

1. **write-on.js -> For html pages (DOM)**

  - Add a script tag to your html file
  ```<script src="./write-on.js"></script>```
  - Call the writeOn function ```writeOn(element, text=null, list=null, loopTimes=null, delayTime=100, waitTime=1000)```

2. **write-on-node.js -> For React Apps**

  - Import ```import writeOn from './path/to/write-on-node.js'```
  - Call the writeOn function in useEffect

  ```
  useEffect(() => {
        writeOn(setstate, text=null, list=null, loopTimes=null, delayTime=100, waitTime=1000)
    }, [])
  ```

  **NOTE->**
  ```Element``` = your HTML DOM Element (For write-on.js)
  
  ```setstate``` = your ```setState``` function in react. Visit [Learn react state hook](https://reactjs.org/docs/hooks-state.html#gatsby-focus-wrapper) 
  
  ```text``` = the text you want to write
  
  ```list``` = array of texts
  
  You can either pass in a text or an array of texts. Pass in ```null``` if you are not giving any arguement
  
  ```loopTimes``` = Number of times to repeat the write on. **```null```(default) = infinite**
  
  ```delayTime``` = Time delay between each characters in ```milliseconds```. **default = ```100ms```**
  
  ```waitTime``` = Time to wait before erasing a text in ```milliseconds```. **default = ```1000ms```**
  
  
  Hooray!!!
  
  You are ready to rock :)
