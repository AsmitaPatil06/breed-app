import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageServiceService } from '../image-service.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  breedList: String[] = [
    'Borzoi',
    'shiba',
    'african',
    'Affenpinscher',
    'Shihtzu',
    'Toy Terrier',
    'Saluki',
  ];

  breed: any;

  constructor(private is: ImageServiceService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit() {
    this.breed = this.form.value.title;
    this.is.getList(this.breed).subscribe(
      (response) => {
        this.router.navigate(['image']);
      },
      (error) => {
        //Error callback
        console.error('error caught in component');
      }
    );
  }
}
