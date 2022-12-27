import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['edit', 'save', 'editTip', 'currentSetting'];

  connect() {}
  setEditStatus(state) {
    if (state) {
      this.editTipTarget.classList.add('hidden');
      this.editTarget.classList.add('hidden');
      this.currentSettingTarget.classList.remove('hidden');
    } else {
      this.editTipTarget.classList.remove('hidden');
      this.editTarget.classList.remove('hidden');
      this.currentSettingTarget.classList.add('hidden');
    }
  }
  input_switch(e) {
    e.preventDefault();
    if (e.srcElement.textContent === '取消') {
      e.srcElement.textContent = '編輯';
      this.setEditStatus(true);
    } else {
      e.srcElement.textContent = '取消';
      this.setEditStatus(false);
    }
  }
  save(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.saveTarget.click();
    }
  }
}
