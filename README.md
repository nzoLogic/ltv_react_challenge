
## Project Requirements

This project requires using **node 14.16.0**
* learn more about managing node versions using [NVM](https://github.com/nvm-sh/nvm)


## Getting Started 

1. Clone repo:  ` git clone https://github.com/nzoLogic/ltv_react_challenge.git `
2. `npm install`
3. `npm start`

The app will run in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Challenge 1
<hr></hr>

### Problem
The `DataList` component was only trying to access the data property one layer deep. So this issue didn't really have anything to do with reconciliation.


The bug for this exercise was actually quite simple. In `animals/reducer.js` we returned the following object in our reducers:
```
Object.assign(state, {
  animals: {
    data: [],
    // ...
  }
})
````

And in `index-reducer.js` we use `combineReducers` with the name `animals` *(combineReducer takes the names passed to it as keys for our state tree)*
which caused our state tree to look like:
```
{
  Animals: {
    animals: {
      animals: {
        data
      }
    }
  }
}
````

### Solution
Modify the reducer to simply return a plain object without a named 'animals' key.
```
{
  data: [],
  messages: []
  ...
}
```
## Challenge 2
<hr></hr>

### Problem
Find another solution to managing side effects other than redux-saga.

### Solution
Use an event-driven approach and layered architecture towards creating separation of concerns between UI components, application state, and business logic. You can follow commits and comments on the PR [here](https://github.com/nzoLogic/ltv_react_challenge/pull/1).

I tackled this problem in the following:
1. Use modern React/Redux which includes hooks
2. Create an API feature that is abstract and reusable
3. Add feature specific middleware *e.g. vegetablesMiddleware* for routing events.
This keeps our application relatively lightweight by not depending on an additional external library while also introducing discipline into our application resulting in a more maintainable code base.

When you click Fetch Data for Vegetables, notice the events that are dispatched.
```
[Vegetables]: FETCH_VEGETABLES

// middleware! Our component and interactor knows nothing about these details
[Vegetables]: API_REQUEST

// also managed by middle ware for dispatching appropriate document actions to update state
[Vegetables]: API_SUCCESS
```
