import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  userId : string = ''
  otp :string = ''
  loginKeyUrl = "http://dmsconnect.maruti.com/dmsportal/api/loginuserkey/"
  urlStart  :string = "https://dmsconnect.maruti.com/forms/frmservlet?config=webstart&p_user_id=" //+ userId + urlCenter
  urlCenter :string = "&p_pmc=1"
  urlEnd :string = ""
  
  onClickOtp() {
    if (this.userId === "") {
      alert("Enter User ID")
    } 
    else {
      window.open(this.loginKeyUrl + this.userId +"/1")
    }
  }

  onLogin() {
    let today = new Date()
    let minutes : string |number = today.getMinutes() - 1
    minutes = minutes.toString()
    minutes.length === 1 ? minutes = "0" + minutes : minutes = minutes
    let hours : string |number = today.getHours()
    hours = hours.toString()
    hours.length === 1 ? hours = "0" + hours : hours = hours
    let year = today.getFullYear().toString()
    let month : string |number = today.getMonth() + 1
    let date = today.getDate()
    month = month.toString()
    month.length === 1 ? month = "0" + month : month = month
    year = year.substring(2)

    let sId = minutes+hours+year+month+date

    if (this.otp === "") {
      alert("Enter OTP")
    } 
    else {
      window.open('http://dmsconnect.maruti.com/forms/frmservlet?config=webstart&p_user_id='+this.userId+"&p_pmc=1&key="+this.otp+"&sId="+sId)
    }
    
  }
}
