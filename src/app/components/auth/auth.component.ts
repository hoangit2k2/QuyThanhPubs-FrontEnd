import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import MESSAGE from 'src/app/common/message.name';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm !: FormGroup;
  isLoading = false;
  constructor(
    private alertService: AlertService, 
    private authService: AuthService,
    private router: Router, 
    private activeRoute : ActivatedRoute,
    private storeService: StoreService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  onLogin(){
    console.log(this.router)
    console.log(this.activeRoute.data.subscribe(data=>{
      console.log(data)
    }))
    const {username, password} = this.loginForm.value;
    console.log({username, password} )
    this.isLoading = true;
    this.authService.login(username, password).subscribe((response) =>{
    this.alertService.showAlert(MESSAGE.SUCCESS, '', 'Đăng nhập thành công!')
    
    this.isLoading = false;
    setTimeout(() =>{
      this.router.navigate(['/']);
    }, 1000)
    this.storeService.saveAccessToken(response.access_token);
    },
    (err)=>{
      this.isLoading = false;
      this.alertService.showAlert(MESSAGE.ERROR, 'Đăng nhập thất bại!', 'Tên tài khoản hoặc mật khẩu không đúng!')
      console.log(err)
    })
  }

}
