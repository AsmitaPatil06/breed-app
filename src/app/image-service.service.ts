import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ImageServiceService {
  breed1: any;
  go = false;
  constructor(private hp: HttpClient) {}

  getList(breed) {
    this.breed1 = breed;
    console.log('Backend=>', breed);
    this.go = true;
    return this.hp.get(`https://dog.ceo/api/breed/${breed}/images/random`);
  }
  get() {
    return this.hp.get(
      `https://dog.ceo/api/breed/${this.breed1}/images/random`
    );
  }
  isAuthenticated(): boolean {
    if (this.go) {
      return true;
    }

    return false;
  }
}
