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
  Now we can go to the next level to add dynmaic to our state value
  by calling the value from a method:
  
  import React, { Component } from "react";

        class Counter extends Component {
          state = {
            count: 0
          };
          render() {
            return (
              <React.Fragment>
                <span>{this.state.count}</span>
                <button>Increment</button>
              </React.Fragment>
            );
          }

          formatCount() {
            return this.state.count === 0 ? "Zero" : this.state.count;

            //we can improve the abobe code by using object distructuring
            // const {count} = this.state;
            //return count ===0 ? 'Zero' : count;
          }
        }

        export default Counter;
  
  ----
  we can add any objects to our property and call it in {} valid javascrip expersion
  For example, we can add a URL to our property and render it.

        import React, { Component } from "react";

        class Counter extends Component {
          state = {
            count: 0,
            imageUrl: "https://picsum.photos/500"
          };
          render() {
            return (
              <React.Fragment>
                <img src={this.state.imageUrl} alt=""></img>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
              </React.Fragment>
            );
          }

          formatCount() {
            return this.state.count === 0 ? "Zero" : this.state.count;

            // return this.state.count === 0 ? "Zero" : this.state.count;

            //we can improve the abobe code by using object distructuring
            // const {count} = this.state;
            //return count ===0 ? 'Zero' : count;
          }
        }

        export default Counter;
  
  ----
 Now, we will learn how to add CLASS and attribute to our Element<>, we can use a reserve name like "class" in our element, we have to use <h4>className</h4> also we can add style by create a new propery which calls styles = {}
 
 import React, { Component } from "react";

        class Counter extends Component {
          state = {
            count: 0
          };

          styles = {
            fontSize: 20,
            fontWeight: "bold"
          };

          render() {
            return (
              <React.Fragment>
                <span style={this.styles} className="badge badge-primary m-2">
                  {this.formatCount()}
                </span>
                <button className="btn btn-secondary btn-sm">Increment</button>
              </React.Fragment>
            );
          }

          formatCount() {
            return this.state.count === 0 ? "Zero" : this.state.count;

          }
        }

        export default Counter;
  
   second way: we can also eleminate the styles{} property and change the code to this, pass the valiavle to the object {{}}
   
    <span style={ {fontSize: 20} } className="badge badge-primary m-2">
  
  
  
  
<h2 style "color:blue" >Rending the classes dynamicly<h2>
        
        import React, { Component } from "react";

        class Counter extends Component {
          state = {
            count: 3
          };

          //   styles = {
          //     fontSize: 20,
          //     fontWeight: "bold "
          //   };

          render() {
            let classes = "badge m-2 badge-";
            classes += this.state.count === 0 ? "warning" : "primary";

            return (
              <React.Fragment>
                <span className={classes}> {this.formatCount()} </span>
                <button className="btn btn-secondary btn-sm">Increment</button>
              </React.Fragment>
            );
          }

          formatCount() {
            return this.state.count === 0 ? "Zero" : this.state.count;
          }
        }

        export default Counter;
     
  ------To Clean the code above, we will creat a class for our rendering style. The code will look like this:
  
  
        import React, { Component } from "react";

        class Counter extends Component {
          state = {
            count: 0
          };

          //   styles = {
          //     fontSize: 20,
          //     fontWeight: "bold "
          //   };

          render() {
            // let classes = this.getBadgeClasses();

            return (
              <React.Fragment>
                <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
                <button className="btn btn-secondary btn-sm">Increment</button>
              </React.Fragment>
            );
          }

          getBadgeClasses() {
            let classes = "badge m-2 badge-";
            classes += this.state.count === 0 ? "warning" : "primary";
            return classes;
          }

          formatCount() {
            return this.state.count === 0 ? "Zero" : this.state.count;
          }
        }

        export default Counter;
  
 
  
