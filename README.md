# write-on-js
> Write On Effect JavaScript

## Install
There are a couple of ways of installing the package depending on what framework or library you're using.

### NPM
> Coming soon

### CDN
> Coming soon

### Cloning The Repo
```
git clone https://github.com/jerryHolurantie/write-on-js.git
```

There are two js files in this repo. `write-on.js` and `write-on-node.js` for vanilla javascript and react projects respectively.

## Usage 
### With Vanilla JS
- Add a script tag to your html file
```
<script src="./path/to/write-on-node.js"></script>

<!-- Or using cdn -->
<script src="cdn-link"></script>
```
- Call the writeOn function
```
writeOn(element, text = null, list = null, loopTimes = null, delayTime = 100, waitTime = 1000)
```

#### Example
```
<script src="./write-on.js"></script>
<script>
  let writeOnElement = document.querySelector(".write-on-text")
  
  const text = "This Is Write On Effect With Javascript"
  
  writeOn(writeOnElement, text);
</script>
```

### With React
- Import the write-on.js file
```
import writeOn from './path/to/write-on-node.js'
```
- Call the writeOn function in useEffect
```
useEffect(() => {
  writeOn(setstate, text = null, list = null, loopTimes = null, delayTime = 100, waitTime = 1000)
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
