class BuyItem < ApplicationRecord
  #has_many :category

  MAX_PRICE = 300000.freeze
  validates :price, numericality: {only_interger: true, less_than: MAX_PRICE}

  validates :name, uniqueness: true

  #一覧表示
  scope :by_month_buy,-> (month) {
    where(approval: true, created_at: month)#.pluck(:category_id, :name, :price)
  }

  #購入可能かどうかを判定
  scope :buy_approval, -> (category) {
    where(
      category_id: category,
      approval: true,
      created_at: Time.current.all_month
      )
  }

  #チャート表示用にデータ取得
  scope :total_amount_of_month, -> {
    select("to_char(created_at, 'yyyy-mm') as buy_month, sum(price) as month_price")
    .where(approval: true)
    .order("buy_month")
    .group("buy_month")
    .map{ |tmp| {buy_month: tmp.buy_month, month_price: tmp.month_price}}
  }

end
