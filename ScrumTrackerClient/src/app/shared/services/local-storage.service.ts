import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  getItem(itemKey: string) {
    return localStorage.getItem(itemKey);
  }

  setItem(itemKey: string, itemValue: any) {
    localStorage.setItem(itemKey, itemValue);
  }

  deleteStorage() {
    localStorage.clear();
  }

  removeItem(itemKey: string) {
    localStorage.removeItem(itemKey);
  }
}
