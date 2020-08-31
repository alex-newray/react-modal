# React Modal
Library for simplified use of the modal with Redux. Semantic-ui-react components are used

## Install:
```
npm install -S git+https://github.com/alex-newray/react-modal.git
```

## Use
### Step 1. Install reducer
```
import {RMR} from 'react-modal'
const reducer = combineReducers({
  reducers,
  RMR,
})
```
### Step 2. Install view to container
```
import {getRMContainer} from 'react-modal'
ReactDOM.render(
  <Provider store={store}>
    <ReactModalView />
  </Provider>,
  getRMContainer()
);
```
### Step 3. Show modal
#### Message/content
use `RMShowMsg(options)`
```
options = {}
```
Params:
* content(string/jsx)
* headerMsg(string) - Use header in modal
* headerIcon(string) - Use icon in header(show [semantic-ui docs](https://react.semantic-ui.com/elements/icon/) )
* size(string) - A modal can vary in size. (show [semantic-ui docs](https://react.semantic-ui.com/modules/modal/#variations-size) ) ('mini', 'tiny', 'small', 'large' or 'fullscreen')
* dimmer(bool/string) - A modal can specify dimmer variations. (show [semantic-ui docs](https://react.semantic-ui.com/modules/modal/#variations-dimmer) ) (true, 'inverted' or 'blurring')
* basic(bool) - A modal can reduce its complexity. (show [semantic-ui docs](https://react.semantic-ui.com/modules/modal/#types-basic) )
* closeIcon(bool) - A Modal can have a close icon. (show [semantic-ui docs](https://react.semantic-ui.com/modules/modal/#variations-close-icon) )

```
import {RMShowMsg} from 'react-modal'
<a onClick={ ()=>{ this.props.RMShowMsg({
            content:'Success',
            headerMsg:'Header',
            headerIcon: 'archive',
            size:'large',
            dimmer:'blurring',
            basic:true,
            closeIcon:false,
          }) } }>Basic Message Modal</a>
```
```
<a onClick={ ()=>{ this.props.RMShowMsg({
            content:<p>Success</p>,
          }) } }>Basic React Content Modal</a>
```
#### Confirm modal
use `RMShowConfirm(options)`
```
options = {}
```
Params:
* content(string/jsx)
* headerMsg(string) - Use header in modal
* headerIcon(string) - Use icon in header(show [semantic-ui docs](https://react.semantic-ui.com/elements/icon/) )
* size(string) - A modal can vary in size. (show [semantic-ui docs](https://react.semantic-ui.com/modules/modal/#variations-size) ) ('mini', 'tiny', 'small', 'large' or 'fullscreen')
* dimmer(bool/string) - A modal can specify dimmer variations. (show [semantic-ui docs](https://react.semantic-ui.com/modules/modal/#variations-dimmer) ) (true, 'inverted' or 'blurring')
* basic(bool) - A modal can reduce its complexity. (show [semantic-ui docs](https://react.semantic-ui.com/modules/modal/#types-basic) )
* closeIcon(bool) - A Modal can have a close icon. (show [semantic-ui docs](https://react.semantic-ui.com/modules/modal/#variations-close-icon) )
* onConfirm(function) - Callback on click confirm
* onCancel(function) - Callback on click cancel
* cancelButton(string) - the label of the cancel button
* confirmButton(string) - the label of the confirm button
```
import {RMShowConfirm} from 'react-modal'
<a onClick={ ()=>{ this.props.RMShowConfirm({
            content:'Remove this user?',
            onConfirm:()=> {alert('Confirm')},
            onCancel:()=> {alert('Cancel')},
            cancelButton:'No No No',
            confirmButton:'Yes, Bitch',
          }) } }>Confirm Modal</a>
```


#### Success Modal
use `RMShowSuccess(options)`
```
options = {}
```
Params:
* content(string/jsx)
* size(string) - A modal can vary in size. (show [semantic-ui docs](https://react.semantic-ui.com/modules/modal/#variations-size) ) ('mini', 'tiny', 'small', 'large' or 'fullscreen')
* dimmer(bool/string) - A modal can specify dimmer variations. (show [semantic-ui docs](https://react.semantic-ui.com/modules/modal/#variations-dimmer) ) (true, 'inverted' or 'blurring')
* basic(bool) - A modal can reduce its complexity. (show [semantic-ui docs](https://react.semantic-ui.com/modules/modal/#types-basic) )
* closeIcon(bool) - A Modal can have a close icon. (show [semantic-ui docs](https://react.semantic-ui.com/modules/modal/#variations-close-icon) )
* timer (milliseconds) - The timer starts after which the modal closes

```
<Button onClick={ ()=>{ this.props.RMShowSuccess({
            content:'Saved successfully',
            size:'small',
            dimmer:'blurring',
            basic:true,
            closeIcon:false,
            timer:2000,
          }) } }>Success Modal</Button>
```

#### Error Modal
use `RMShowError(options)`
```
options = {}
```
Params:
* content(string/jsx)
* size(string) - A modal can vary in size. (show [semantic-ui docs](https://react.semantic-ui.com/modules/modal/#variations-size) ) ('mini', 'tiny', 'small', 'large' or 'fullscreen')
* dimmer(bool/string) - A modal can specify dimmer variations. (show [semantic-ui docs](https://react.semantic-ui.com/modules/modal/#variations-dimmer) ) (true, 'inverted' or 'blurring')
* basic(bool) - A modal can reduce its complexity. (show [semantic-ui docs](https://react.semantic-ui.com/modules/modal/#types-basic) )
* closeIcon(bool) - A Modal can have a close icon. (show [semantic-ui docs](https://react.semantic-ui.com/modules/modal/#variations-close-icon) )
* timer (milliseconds) - The timer starts after which the modal closes

```
<Button onClick={ ()=>{ this.props.RMShowError({
            content:'Sistem Error',
            size:'small',
            dimmer:'blurring',
            basic:true,
            closeIcon:false,
            timer:5000,
          }) } }>Error Modal</Button>
```

#### Close All Modal
use `RMClose()`

```
<Button onClick={ ()=>{ this.props.RMClose() } }>Close</Button>
```
