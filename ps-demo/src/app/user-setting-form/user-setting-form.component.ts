import { Component, OnInit } from '@angular/core';
import {UserSettings} from '../data/user-setteng'


@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css']
})
export class UserSettingFormComponent implements OnInit {
  originalUserSettings:UserSettings={
    name:'awais',
    emailoffers:true,
    notes:"this is first style",
    interfaceStyle:'dark',
    subscriptionType:'annual'

  }
  userSettings:UserSettings={...this.originalUserSettings}
  

  constructor() { }

  ngOnInit(): void {
  }

}
