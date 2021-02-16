const { expect } = require('chai')
const ShoppingListService = require('../src/shopping-list-service')
const knex = require('knex')

describe(`Shopping list service object`, function() {
    let db
    let testList = [
        {
            id: 1,
            name: "Instant Noods",
            price: 2.67,
            date_added: new Date('1919-12-22T16:28:32.615Z'),
            checked: true,
            category: Snack
        },
        {
            id: 2,
            name: "Count Chocula",
            price: 4.99,
            date_added: new Date('1989-12-22T16:28:32.615Z'),
            checked: false,
            category: Breakfast
        },
        {
            id: 3,
            name: "Franken Berry",
            price: 4.16,
            date_added: new Date('1969-12-22T16:28:32.615Z'),
            checked: true,
            category: Breakfast
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
            
        })
    })
})