import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SystemInventory} from "../../../api/system-inventory";
import {TypeIngr} from "../ingredient-list/typeEnum";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-kitchenware-add',
  templateUrl: './kitchenware-add.component.html',
  styleUrls: ['./kitchenware-add.component.css']
})
export class KitchenwareAddComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
              private systemInventory: SystemInventory) {
    this.form = this.fb.group({
      name:[''],
      type:[TypeIngr],
      category:[''],
      isActive:['']
    })
  }

  ngOnInit(): void {
  }

  logout() {
    AuthService.logout();
  }

  submit() {
    this.form.value.isActive = true;
    this.systemInventory.addKitchenware(this.form.value).subscribe(data => {
      if (data == true) location.href = "/kitchenwares"
    });
  }

}
