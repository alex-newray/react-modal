/*
types:
0 - message/content modal
1 - confirm modal
2 - success modal
3 - error modal
*/

const defaultState = {
  show:false,
  type:0,

  content:'',
  size:'small',
  dimmer:true,
  closeIcon:true,
  basic:false,

  headerMsg:false,
  headerIcon:false,


  onConfirm:null,
  onCancel:null,
  cancelButton:'No',
  confirmButton:'Yes',

  timer:0,
  lst:[],
}
export default defaultState
