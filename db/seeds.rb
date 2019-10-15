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

one_month = [
  {category_id: 1, name: "ガスコンロ_テスト", price: 44000, approval: true},
  {category_id: 1, name: "IHコンロ_テスト", price: 66000, approval: false},
  {category_id: 2, name: "MH_テスト", price: 3900, approval: true}
]

two_month = [
  {category_id: 1, name: "ルンバ_テスト", price: 45500, approval: true},
  {category_id: 1, name: "ディスプレイ_テスト", price: 12000, approval: false},
  {category_id: 2, name: "MTG_テスト", price: 1200, approval: true}
]

one_month.each do |tmp|
  one_month_before = BuyItem.new(category_id: tmp[:category_id], name: tmp[:name], price: tmp[:price], approval: tmp[:approval])
  one_month_before.created_at = 1.months.ago
  one_month_before.save
end

two_month.each do |tmp|
  two_month_before = BuyItem.new(category_id: tmp[:category_id], name: tmp[:name], price: tmp[:price], approval: tmp[:approval])
  two_month_before.created_at = 2.months.ago
  two_month_before.save
end
