import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {ActivatedRoute} from "@angular/router";
import {IngrInfo} from "../ingredient-list/IngredientModel";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SystemInventory} from "../../../api/system-inventory";

@Component({
  selector: 'app-ingredient-edit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.css']
})
export class IngredientEditComponent implements OnInit {

  actualInfo: IngrInfo;
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
              private systemInventory: SystemInventory,
              private route: ActivatedRoute) {
  }

  logout() {
    AuthService.logout();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
      name: [''],
      type: [''],
      category: [''],
      isActive: [''],
      image: ['']
    })
    this.route.queryParams.subscribe(params =>
      this.systemInventory.getIngredient(params.id).subscribe((data: IngrInfo) =>
        this.actualInfo = data))
  }

  submit() {
    this.form.value.id = this.actualInfo.id;
    this.form.value.isActive = this.actualInfo.active;
    if (this.form.value.type.length == 0) {
      this.form.value.type = this.actualInfo.type.toString()
    }
    if (this.form.value.category.length == 0) {
      this.form.value.category = this.actualInfo.category.toString()
    }
    console.log(this.form.value)
    this.systemInventory.editIngredient(this.form.value).subscribe(data =>
      console.log(data));
  }

}
