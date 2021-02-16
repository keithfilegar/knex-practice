const ShoppingListService = {
    getShoppingList(knex) {
        return knex.select('*').from('shopping_list')
    },
    insertListItem(knex, newItem) {
        return knex
            .insert(newItem)
            .into('shopping_list')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    getItemById(knex, id) {
        return knex
            .from('shopping_list')
            .select('*')
            .where('id', id)
            .first()
    },
    deleteListItem(knex, id) {
        return knex('shopping_list')
            .where({id})
            .delete()
    },
    updateListItem(knex, id, newListItemFields) {
        return knex('shopping_list')
            .where({id})
            .update(newListItemFields)
    }
}

module.exports = ShoppingListService