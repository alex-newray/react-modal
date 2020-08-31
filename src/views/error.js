import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class _Error extends React.Component {
  render(){
    const {el, RMClose} = this.props
    const {size, dimmer, closeIcon, content, basic } = el.options

    return(
      <Modal
        open={true}
        size={size}
        basic={basic}
        dimmer={dimmer}
        closeIcon={closeIcon}
        onClose={()=>{ RMClose(el.uid) }}
      >
        <Header content={'Error'} icon={'dont'} color='red'/>
        <Modal.Content>
          {content}
        </Modal.Content>
      </Modal>
    )
  }
}
export default _Error
