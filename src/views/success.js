import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class _Success extends React.Component {
  render(){
    const {el, RMClose} = this.props
    const {show, size, dimmer, closeIcon, content, basic } = el.options

    return(
      <Modal
        open={true}
        size={size}
        basic={basic}
        dimmer={dimmer}
        closeIcon={closeIcon}
        onClose={()=>{ RMClose(el.uid) }}
      >
      <Header content={'Success'} icon={'checkmark'} color='green'/>
        <Modal.Content>
          {content}
        </Modal.Content>
      </Modal>
    )
  }
}
export default _Success
