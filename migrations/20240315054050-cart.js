module.exports = {
  async up(db) {
    db.createCollection('cart')
  },

  async down(db) {
    db.createCollection('cart').drop()
  },
}
