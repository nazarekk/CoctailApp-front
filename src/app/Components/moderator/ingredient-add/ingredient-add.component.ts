import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SystemInventory} from "../../../api/system-inventory";

@Component({
  selector: 'app-ingredient-add',
  templateUrl: './ingredient-add.component.html',
  styleUrls: ['./ingredient-add.component.css']
})
export class IngredientAddComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
              private systemInventory: SystemInventory) {
    this.form = this.fb.group({
      name:[''],
      type:[''],
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
    this.systemInventory.addInrgedient(this.form.value).subscribe(data => {
      if (data == true) location.href = "/ingredients"
    });
  }

}
