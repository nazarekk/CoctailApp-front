import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {ActivatedRoute} from "@angular/router";
import {IngrInfo} from "../ingredient-list/IngredientModel";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ingredient-edit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.css']
})
export class IngredientEditComponent implements OnInit {

  actualInfo: IngrInfo;
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private route: ActivatedRoute) { }

  logout() {
    AuthService.logout();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>
      this.auth.getIngredient(params.id).subscribe(data =>
        this.actualInfo = data))
    this.form = this.fb.group({
      id:[''],
      name:[''],
      type:[''],
      category:[''],
      isActive:['']
    })
  }

  submit() {
    this.form.value.id = this.actualInfo.id;
    this.form.value.isActive = this.actualInfo.isActive;
    if (this.form.value.name.isEmpty()) {this.form.value.name = this.actualInfo.name}
    if (this.form.value.type.isEmpty()) {this.form.value.name = this.actualInfo.type}
    if (this.form.value.category.isEmpty()) {this.form.value.name = this.actualInfo.category}
    this.auth.editIngredient(this.form.value).subscribe(data =>
    console.log(data));
  }

}
