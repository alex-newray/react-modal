import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { combineReducers } from 'redux'
import { Provider, connect } from 'react-redux';
import { Button } from 'semantic-ui-react'

import {RMR, ReactModalView, RMShowMsg, RMShowConfirm,RMShowError,RMShowSuccess, RMClose, getRMContainer} from '../../../../react-modal'

const reducer = combineReducers({
  RMR
})

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware),
)
window.store = store

class _Application extends React.Component {
  render(){
    return(
      <div>
        <Button onClick={ ()=>{ this.props.RMShowMsg({
            content:'teset sds',
            headerMsg:'Header',
            headerIcon: 'archive',
            size:'large',
            dimmer:'blurring',
            basic:true,
            closeIcon:true,
          }) } }>Basic Message Modal</Button>

        <Button onClick={ ()=>{ this.props.RMShowMsg({
            content:<p><Button onClick={()=>{
              this.props.RMShowMsg({
                  content:<Button onClick={()=>{ this.props.RMClose() }}>Close all</Button>,
                })
            }}>Ho ho</Button></p>,
          }) } }>Basic React Content Modal</Button>

        <Button onClick={ ()=>{ this.props.RMShowConfirm({
            basic:false,
            content:'Remove this user?',
            onConfirm:()=> {alert('Confirm')},
            onCancel:()=> {alert('Cancel')},
            cancelButton:'No No No',
            confirmButton:'Yes, Bitch',
          }) } }>Confirm Modal</Button>

        <Button onClick={ ()=>{ this.props.RMShowError({
            content:'Sistem Error',
            size:'small',
            dimmer:'blurring',
            basic:true,
            closeIcon:false,
          }) } }>Error Modal</Button>

        <Button onClick={ ()=>{ this.props.RMShowSuccess({
            content:'Saved successfully',
            size:'small',
            dimmer:'blurring',
            basic:true,
            closeIcon:false,
            timer:2000,
          }) } }>Success Modal</Button>

      </div>
    )
  }
}
const Application = connect(
  (state)=>({}),
  (dispatch)=>({
    RMShowMsg:(options)=>{ dispatch(RMShowMsg(options)) },
    RMShowConfirm:(options)=>{ dispatch(RMShowConfirm(options)) },
    RMShowError: (options)=>{ dispatch(RMShowError(options)) },
    RMShowSuccess: (options)=>{ dispatch(RMShowSuccess(options)) },
    RMClose:(uid)=>{ dispatch(RMClose(uid)) },
  })
)(_Application)

ReactDOM.render(
  <Provider store={store}>
    <ReactModalView />
  </Provider>,
  getRMContainer()
);

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('content')
);
