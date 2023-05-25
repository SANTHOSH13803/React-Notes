// *!  Preformance Optimisation : */

// ? If two or more componets are integrated in a same component,if each component has different state ,change in state of one component re-renders all the other components
// ** React.memo is a higher order component that avoid re-render of funtional component if its props does not changes */

// TODO: TO use React.memo wrap the component like shown below
// * --------------- export default React.memo(ComponentName)

//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------

// !------------> useCallback <------------

// * hook that will return a memoized version of the callback funtion that only changes if one of the dependencies has changed
// ? Why we use it??
// * It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

// ? How to use it?
// * we wrap the callback funtion around it as a first value and we pass a dependency array to its second value.

// TODO : const callbackFuntion = useCallback(()=>{...black of code which depends on state A}, [A])
// The component that depends on state only re-renders not a the other components

// Every time when the component re-renders the funtion will be called again.
