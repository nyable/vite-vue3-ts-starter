import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
// can call this.$notify ...
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    '$notify': typeof ElNotification;
    '$message': typeof ElMessage;
    '$msgbox': typeof ElMessageBox;
    '$confirm': typeof ElMessageBox.confirm;
    '$alert': typeof ElMessageBox.alert;
    '$prompt': typeof ElMessageBox.prompt;
  }
}
