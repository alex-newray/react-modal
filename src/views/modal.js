import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class _Modal extends React.Component {
  render(){
    const {el, RMClose} = this.props
    const {size, dimmer, closeIcon, content, basic, close, headerMsg, headerIcon } = el.options

    const header = (headerMsg!=false)?(
      <Header content={headerMsg} icon={headerIcon} />
    ):('')

    return(
      <Modal
        open={true}
        size={size}
        basic={basic}
        dimmer={dimmer}
        closeIcon={closeIcon}
        onClose={()=>{ RMClose(el.uid) }}
      >
        {header}
        <Modal.Content>
          {content}
        </Modal.Content>
      </Modal>
    )
  }
}
export default _Modal
