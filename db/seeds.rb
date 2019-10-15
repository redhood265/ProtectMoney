# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.new(name: "家電").save
Category.new(name: "ゲーム").save

BuyItem.new(category_id: 1, name: "電子レンジ_テスト", price: 24000, approval: true).save
BuyItem.new(category_id: 1, name: "洗濯機_テスト", price: 30000, approval: false).save
BuyItem.new(category_id: 2, name: "KH_テスト", price: 7800, approval: true).save


