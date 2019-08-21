'use strict';

// class Storage {
//   constructor(
//     items = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'],
//   ) {
//     this.items = items;
//   }
//   // повертає текущі товари
//   getItems() {
//     return this.items;
//   }
//   // дод.тов
//   addItem(item) {
//     this.items.push(item);
//   }
//   // знаходить і удаляє знайдений товар
//   removeItem(item) {
//     this.items.includes('Пролонгер');
//     this.items.splice(1, 1);
//   }
// }
// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);
// const items = storage.getItems();
// console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

class Storage {
    constructor(items) {
      this.items = items;
    }
    
    getItems() {
      return this.items;
    }
    
    addItem(item) {
      this.items.push(item);
    }
    
    removeItem(item) {
      if (!this.items.includes(item)) return;
      
      const index = this.items.indexOf(item);
      return this.items.splice(index, 1);;
    }
  }
  
  const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]