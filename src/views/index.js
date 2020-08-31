import React from 'react'
import {connect} from 'react-redux'

import BaseModal from './modal'
import ConfirmModal from './confirm'
import ErrorModal from './error'
import SuccessModal from './success'

import {RMClose} from '../actions'

const getModal = (type)=>{
  switch (type) {
    case 0:
      return BaseModal
    case 1:
      return ConfirmModal
    case 2:
      return SuccessModal
    case 3:
      return ErrorModal
    default:
      return BaseModal
  }
}

class ReactModal extends React.Component {
  render(){
    const {type, lst, RMClose} = this.props


    const views = lst.map((el,i)=>{
      const Content = getModal(el.type)
      return <Content el = {el} RMClose={RMClose} key={el.uid}/>
    })
    return(
      <React.Fragment>
        {views}
      </React.Fragment>

    )
  }
}
export default connect(
  (state)=>({
    type:state.RMR.type,
    lst:state.RMR.lst,
  }),
  (dispatch)=>({
    RMClose:(uid)=>{ dispatch(RMClose(uid)) },
  })
)(ReactModal)
