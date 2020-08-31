import defaultState from '../defaultState'
import uuidv1 from 'uuid/v1';

const _set = (name, value) => {
  return {
    type:'RM_INTERNAL_SET',
    name:name,
    value:value,
  }
}

const _push = (value) => {
  return {
    type:'RM_INTERNAL_PUSH',
    value:value,
  }
}

const _remove = (uid) => {
  return {
    type:'RM_INTERNAL_REMOVE',
    uid:uid,
  }
}


const setOptions = (options) => {
  return (dispatch, getState) => {
    dispatch(_set('size', (options.size!=undefined)?options.size:defaultState.size))
    dispatch(_set('dimmer', (options.dimmer!=undefined)?options.dimmer:defaultState.dimmer))
    dispatch(_set('basic', (options.basic!=undefined)?options.basic:defaultState.basic))
    dispatch(_set('closeIcon', (options.closeIcon!=undefined)?options.closeIcon:defaultState.closeIcon))
    dispatch(_set('headerMsg', (options.headerMsg!=undefined)?options.headerMsg:defaultState.headerMsg))
    dispatch(_set('headerIcon', (options.headerIcon!=undefined)?options.headerIcon:defaultState.headerIcon))

  }
}

const getOptions = (options) => {
  const _options = {
    'size' : (options.size!=undefined)?options.size:defaultState.size,
    'dimmer': (options.dimmer!=undefined)?options.dimmer:defaultState.dimmer,
    'basic': (options.basic!=undefined)?options.basic:defaultState.basic,
    'closeIcon': (options.closeIcon!=undefined)?options.closeIcon:defaultState.closeIcon,
    'headerMsg': (options.headerMsg!=undefined)?options.headerMsg:defaultState.headerMsg,
    'headerIcon': (options.headerIcon!=undefined)?options.headerIcon:defaultState.headerIcon,
    'content': (options.content!=undefined)?options.content:defaultState.content,
  }
  return _options
}

export const RMShowMsg = (options) => {
  return (dispatch, getState) => {
    const data = {
      uid:uuidv1(),
      type:0,
      options:getOptions(options),
    }
    dispatch(_push(data))
    if (options.timer!=undefined) {
      dispatch(RMSetTimer(options.timer, data.uid))
    }
  }
}

export const RMShowConfirm = (options) => {
  return (dispatch, getState) => {
    let data = {
      uid:uuidv1(),
      type:1,
      options:getOptions(options),
    }

    data.options['onConfirm'] = (options.onConfirm!=undefined)?options.onConfirm:defaultState.onConfirm
    data.options['onCancel'] = (options.onCancel!=undefined)?options.onCancel:defaultState.onCancel
    data.options['cancelButton'] = (options.cancelButton!=undefined)?options.cancelButton:defaultState.cancelButton
    data.options['confirmButton'] = (options.confirmButton!=undefined)?options.confirmButton:defaultState.confirmButton

    dispatch(_push(data))
  }
}

export const RMShowError = (options) => {
  return (dispatch, getState) => {
    const data = {
      uid:uuidv1(),
      type:3,
      options:getOptions(options),
    }
    dispatch(_push(data))

    if (options.timer!=undefined) {
      dispatch(RMSetTimer(options.timer, data.uid))
    }
  }
}

export const RMShowSuccess = (options) => {
  return (dispatch, getState) => {
    const data = {
      uid:uuidv1(),
      type:2,
      options:getOptions(options),
    }
    dispatch(_push(data))
    if (options.timer!=undefined) {
      dispatch(RMSetTimer(options.timer, data.uid))
    }
  }
}

export const RMSetTimer = (timeout, uid) => {
  return (dispatch, getState) => {
    const tid = setTimeout(()=>{
      dispatch(RMClose(uid))
    }, timeout)
  }
}

export const RMClose = (uid) => {
  return(dispatch, getState) => {
    //dispatch(_set('show', false))
    if (uid!=undefined){
      dispatch(_remove(uid))
    } else {
      const lst = getState().RMR.lst
      for ( let i in lst){
        dispatch(_remove(lst[i].uid))
      }
    }
  }
}
