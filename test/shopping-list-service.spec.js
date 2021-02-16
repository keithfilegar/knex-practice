const { expect } = require('chai')
const ShoppingListService = require('../src/shopping-list-service')
const knex = require('knex')

describe(`Shopping list service object`, function() {
    let db
    let testList = [
        {
            id: 1,
            name: "Instant Noods",
            price: "2.67",
            date_added: new Date('1919-12-22T16:28:32.615Z'),
            checked: true,
            category: 'Snack'
        },
        {
            id: 2,
            name: "Count Chocula",
            price: "4.99",
            date_added: new Date('1989-12-22T16:28:32.615Z'),
            checked: false,
            category: 'Breakfast'
        },
        {
            id: 3,
            name: "Franken Berry",
            price: "4.16",
            date_added: new Date('1969-12-22T16:28:32.615Z'),
            checked: true,
            category: 'Breakfast'
        }
    ]

    before(() => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        })
    })

    before(() => db('shopping_list').truncate())

    afterEach(() => db('shopping_list').truncate())

    after(() => db.destroy())

    context(`Given 'shopping_list' has data`, () => {
        beforeEach(() => {
            return db
                .into('shopping_list')
                .insert(testList)
        })

        it(`getShoppingList() resolves entire shopping list from 'shopping_list' table`, () => {
            return ShoppingListService.getShoppingList(db)
                .then(actual => {
                    expect(actual).to.eql(testList.map(item => ({
                        ...item,
                        date_added: new Date(item.date_added)
                    })))
                })
        })

        it(`getItemById() resolves an article by id from 'shopping_list' table`, () => {
            const thirdItemId = 3
            const thirdListItem = testList[thirdItemId - 1]
            return ShoppingListService.getItemById(db, thirdItemId)
                .then(actual => {
                    expect(actual).to.eql({
                        id: thirdItemId,
                        name: thirdListItem.name,
                        price: thirdListItem.price,
                        date_added: thirdListItem.date_added,
                        checked: thirdListItem.checked,
                        category: thirdListItem.category
                    })
                })
        })

        it(`deleteListItem() removes list item by id from 'shopping_list' table`, () => {
            const itemId = 3
            return ShoppingListService.deleteListItem(db, itemId) 
                .then(() => ShoppingListService.getShoppingList(db))
                .then(updatedList => {
                    const expected = testList.filter(listItem => listItem.id !== itemId)
                    expect(updatedList).to.eql(expected)
                })
        })

        it(`updateListItem() updates a list item from 'shopping_list' table`, () => {
            const idToUpdate = 3
            const newItemData = {
                name: 'Boo Berry',
                price: '3.80',
                date_added: new Date('1979-12-22T16:28:32.615Z'),
                checked: false,
                category: 'Breakfast'
            }
            return ShoppingListService.updateListItem(db, idToUpdate, newItemData)
                .then(() => ShoppingListService.getItemById(db, idToUpdate))
                .then(listItem => {
                    expect(listItem).to.eql({
                        id: idToUpdate,
                        ...newItemData
                    })
                })
        })
    })

    context(`Given 'shopping_list' has no data`, () => {
        it(`getShoppingList() resolves as an empty array`, () => {
            return ShoppingListService.getShoppingList(db)
                .then(actual => {
                    expect(actual).to.eql([])
                })
        })

        it(`insertListItem() inserts a new list item and resolves the new article with an 'id'`, () => {
            const newItem = {
                name: 'New item',
                price: "6.66",
                date_added: new Date('1999-12-22T16:28:32.615Z'),
                checked: true,
                category: 'Main'
            }
            return ShoppingListService.insertListItem(db, newItem)
                .then(actual => {
                    expect(actual).to.eql({
                        id: 1,
                        name: newItem.name,
                        price: newItem.price,
                        date_added: newItem.date_added,
                        checked: newItem.checked,
                        category: newItem.category
                    })
                })
        })
    })
})