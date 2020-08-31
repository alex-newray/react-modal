import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class _Confirm extends React.Component {

  constructor(props){
    super(props)
    this.onClose = this.onClose.bind(this)
    this.onConfirm = this.onConfirm.bind(this)
  }

  onClose(){
    const {el, RMClose} = this.props
    if (el.options.onCancel && typeof(el.options.onCancel)=='function')
      el.options.onCancel()
    RMClose(el.uid)
  }

  onConfirm(){
    const {el, RMClose} = this.props
    if (el.options.onConfirm && typeof(el.options.onConfirm)=='function')
      el.options.onConfirm()
    RMClose(el.uid)
  }

  render(){
    const {el, RMClose} = this.props
    const { size, dimmer, closeIcon, content, basic, headerMsg, headerIcon, cancelButton, confirmButton } = el.options

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
        closeOnDimmerClick={false}
      >
        {header}
        <Modal.Content>
          {content}
        </Modal.Content>

        <Modal.Actions>
            <Button
              inverted={basic}
              onClick={this.onClose}
              color='grey'
              content={cancelButton}
            />
            <Button
              inverted={basic}
              onClick={this.onConfirm}
              color='green'
              labelPosition='right'
              icon='checkmark'
              content={confirmButton}
            />
          </Modal.Actions>
      </Modal>
    )
  }
}
export default _Confirm
