# Modal

## Description
Modal is a reusable Modal component for use in React projects.  It comes with a Modal and a ModalButton.  The ModalButton is used to open the modal.  Simply move both folders into your react project and you will have a modal ready to go.

## Usage
To use, copy the Modal and ModalButton folders into your React project src folder (I typically place it in /src/components).  Import the ModalButton into any part of your project that you want to have a modal.  You can have multiple Modals in your project, simply create the ModalButton element wherever you want and pass in the props to customize your project.

ModalButton takes in a few props:

1. buttonName - Pass in the text for the button - Default Click

2. color - Pass in backgroundColor for the button - Default Light Blue (#3081c8)

3. textColor - Pass in the text color of the button - Default White (#fff)

4. Component - Pass in the component you want to render inside the modal - Default is small card describing how to pass in the component

5. props - Any remaining props will automatically be passed to the component you want to rended in the modal.  

```
<ModalButton buttonName={'Press'} color={'grey'} textColor={'blue'} Component={MyComponentName} someOtherProp={'extra'} oneMore={'bonus'} />
```

Any property not entered will use the default.  The extra props can be accessed in your component by using the property name you used.

```
props.someOtherProp  props.oneMore
```

or using Object Destructuring

```
const { someOtherProp, oneMore } = props;
```

## Questions
If you have any questions about the repo, open an issue or contact me directly at <brian.t.halpin@gmail.com>. You can find more of my work at [Brian Halpin](https://github.com/bthalpin).
