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
writeOn(element, text = null, list = null, loopTimes = null, delayTime = 0.1, waitTime = 1)
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

## API
### Vanilla JS
```
writeOn(element, text = null, loopTimes = null, delayTime = 0.1, waitTime = 1)
```
#### element
Your HTML DOM Element.
#### text
> Type: String | Array

The text to be displayed.
### React Js
```
useEffect(() => {
  writeOn(setstate, text = null, list = null, loopTimes = null, delayTime = 100, waitTime = 1000)
}, [])
```
#### setstate
Your `setState` function in react. Visit [Learn react state hook](https://reactjs.org/docs/hooks-state.html#gatsby-focus-wrapper) 
#### text
> Type: String

The text to be displayed.
#### list
> Type: Array

Array of strings

> You can either pass in a text or an array of texts. Pass in ```null``` if you are not giving any arguement

#### loopTimes
> Type: Integer

Number of times to repeat the write on. 
> **`null`(default) = infinite**

#### delayTime
Time delay between each characters in `seconds`. 
> **default = `0.1s`**

#### waitTime
Time to wait before erasing a text in `seconds`. 
> **default = `1s`**

Hooray!!!

You are ready to rock :)
