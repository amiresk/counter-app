# counter-app

- Add install bootstap library to our application
- create a new folder for all new components we are creating...  src\components
- create a new file and name it: counter.jsx
code:

        import React, { Component } from "react";

        class Counter extends Component {
          // state = {  }
          render() {
            return <h1>Hello World</h1>;
          }
        }

        export default Counter;

-open index.js

add: import Counter from './components/counter';
change: <App /> to <Counter />
add <button> element to counter.jsx
  We will receive an error becuase we should have only one parent element, to solve the error, we need to wrap the both TAG in a contraing which we can use <div>:
  
  import React, { Component } from "react";

  class Counter extends Component {
    // state = {  }
    render() {
      return (
        <div>
          <h1>Hello World</h1>
          <button>Increment</button>
        </div>
      );
    }
  }

  export default Counter;
  
  
  When we inspect html code, we will see there are 2 <dev> element one was <div id="root"></div> , the other one is our new container we creared arroun <h1><button> tag. 
  
  To avoid this problem, we can use React child class which calls "Fragment"
  
  import React, { Component } from "react";

class Counter extends Component {
  // state = {  }
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
-----------------

Now, we do not want to hard code our value inside our <TAG>, so we need add property to our code which call STATE::
  
state can be a variable or object for exampele
  
  state = { 
      count: 0,
      address {
              city: 'San Francisco',
              Street: '8th st'
       }
   };

now:
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <React.Fragment>
        <span>{this.state.count}</span>   // in {} we can write any valid javascript expersion...
        <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
---------------------------------
  
  
  
  
  
  
  
  
  
  
  
