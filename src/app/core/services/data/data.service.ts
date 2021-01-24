import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Database {
  [name:string]: AngularFireObject<any>;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  database = {
    pricing: null,
    products: null,
    team: null,
    testimonials: null,
    heroSlides: null
  };
  constructor(private afs: AngularFirestore, private db: AngularFireDatabase) {

  }

  getDatabaseByName(name: string) {
    return this.db.list(name);
  }

  getCollection<T>(name: string) {
    return this.afs.collection<T>(name);
  }

  setCollectionItem<T>(name: string, data: T) {
    const collection = this.getCollection<T>(name);
    collection.add(data);
  }

  getCollectionItem<T>(name: string, id: string) {
    const collection = this.getCollection<T>(name);
    const item = collection.doc(id);
    return item.valueChanges();
  }
}
