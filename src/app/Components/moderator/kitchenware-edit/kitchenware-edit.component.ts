import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SystemInventory} from "../../../api/system-inventory";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../auth/auth.service";
import {KitchenwareInfo} from "../kitchenware-list/KitchenwareModel";

@Component({
  selector: 'app-kitchenware-edit',
  templateUrl: './kitchenware-edit.component.html',
  styleUrls: ['./kitchenware-edit.component.css']
})
export class KitchenwareEditComponent implements OnInit {

  actualInfo: KitchenwareInfo;
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
      this.systemInventory.getKitchenware(params.id).subscribe(data =>
        this.actualInfo = data))
  }

  submit() {
    this.form.value.id = this.actualInfo.id;
    if (this.form.value.type.length == 0) {
      this.form.value.type = this.actualInfo.type.toString()
    }
    if (this.form.value.category.length == 0) {
      this.form.value.category = this.actualInfo.category.toString()
    }
    console.log(this.form.value)
    this.systemInventory.editKitchenware(this.form.value).subscribe(data =>
      console.log(data));
  }

}
