import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {ActivatedRoute} from "@angular/router";
import {IngrInfo} from "../ingredient-list/IngredientModel";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SystemInventory} from "../../../api/system-inventory";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-ingredient-edit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.css']
})
export class IngredientEditComponent implements OnInit, OnDestroy {

  actualInfo: IngrInfo;
  infoSubscription: Subscription;
  form: FormGroup = new FormGroup({});
  alert: boolean = false;

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
      this.infoSubscription = this.systemInventory.getIngredient(params.id).subscribe((data: IngrInfo) =>
        this.actualInfo = data))
  }

  ngOnDestroy() {
    this.infoSubscription.unsubscribe();
  }

  submit() {
    this.form.value.id = this.actualInfo.id;
    if (this.form.value.type.length == 0) {
      this.form.value.type = this.actualInfo.type.toString()
    }
    if (this.form.value.category.length == 0) {
      this.form.value.category = this.actualInfo.category.toString()
    }
    this.systemInventory.editIngredient(this.form.value).subscribe(data =>{
      if (data.status === 200) location.href = "/ingredients";
    }, () => this.alert = true)
  }

}
