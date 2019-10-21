class BuyItem < ApplicationRecord

  #購入可能かどうかを判定
  scope :buy_approval, -> (category) { 
    where(
      category_id: category,
      approval: true,
      created_at: Time.current.all_month
      )
  }

  #チャート表示用にデータ取得
  scope :chart_scope, -> { 
    select("to_char(created_at, 'yyyy-mm') as buy_month, sum(price) as month_price")
    .where(approval: true)
    .order("buy_month")
    .group("buy_month")
  }
end