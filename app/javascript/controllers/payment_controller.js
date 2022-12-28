import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ["linePay", "ebPay"];

 
  btneb(){
    this.changeState(true);    
  }

  btnline(){ 
    this.changeState(false);
  }
  
  changeState(state){
    if (state){
      this.linePayTarget.classList.add('hidden')
      this.ebPayTarget.classList.remove('hidden')
      }else{
        this.linePayTarget.classList.remove('hidden')
        this.ebPayTarget.classList.add('hidden')
      }
  }
}