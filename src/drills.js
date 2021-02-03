require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})

function searchShoppingList(searchTerm) {
    knexInstance
        .select('*')
        .from('shopping_list')
        .where('name', 'ILIKE', `%${searchTerm}%`)
        .then(result => {
            console.log(result)
        })
}

searchShoppingList('ke')

function paginateList(pageNumber) {
    const itemsPerPage = 6
    const offset = itemsPerPage * (pageNumber -1)
    knexInstance
        .select('*')
        .from('shopping_list')
        .limit(6)
        .offset(offset)
        .then(result => {
            console.log(result)
        })
}

paginateList(3)

function getItemsAddedAfterDate(daysAgo) {
    knexInstance
        .select('*')
        .from('shopping_list')
        .where(
            'date_added',
            '>',
            knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
        )
        .then(result => {
            console.log(result)
        })
}

getItemsAddedAfterDate(5)

function totalCategoryCost() {
    knexInstance
        .select('category')
        .sum('price AS total')
        .from('shopping_list')
        .groupBy('category')
        .then(result => {
            console.log(result)
        })
}

totalCategoryCost()