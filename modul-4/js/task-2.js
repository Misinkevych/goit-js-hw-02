'use strict';

const inventory = {
  items: ['Монорельса', 'Фильтр'],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  },
};
inventory.add('Аптечка');
console.log(inventory.items);

const invokeInventoryOperation = function(itemName, inventoryAction) {
  for (let i = 0; i < inventory.length; i++) {
    inventoryAction(itemName[i]);
  }
  console.log(`Invoking ${inventoryAction.name} operation on ${itemName}`);
};
invokeInventoryOperation('Аптечка', inventory.add);
inventory.remove('Фильтр');
console.log(inventory.items);
invokeInventoryOperation('Фильтр', inventory.remove);
