import {RMShowMsg, RMShowConfirm, RMShowError,RMShowSuccess, RMClose} from './actions'
import RMR from './reducers'
import ReactModalView from './views'

const getRMContainer = () => {
  let RMContainer = document.createElement('div');
  document.body.appendChild(RMContainer)
  return RMContainer;
}

export {RMShowMsg, RMR, ReactModalView, RMShowConfirm, RMClose, RMShowError, RMShowSuccess, getRMContainer}
