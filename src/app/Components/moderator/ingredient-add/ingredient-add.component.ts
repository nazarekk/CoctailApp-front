import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SystemInventory} from "../../../api/system-inventory";
import {TypeIngr} from "../ingredient-list/typeEnum";

@Component({
  selector: 'app-ingredient-add',
  templateUrl: './ingredient-add.component.html',
  styleUrls: ['./ingredient-add.component.css']
})
export class IngredientAddComponent implements OnInit {
  success: boolean = false;

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
              private systemInventory: SystemInventory) {
    this.form = this.fb.group({
      name:[''],
      type:[TypeIngr],
      category:[''],
      isActive:[''],
      image: ['']
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
      if (data == true) this.success=true;
    });
  }

}
