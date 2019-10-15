class BuyItem < ApplicationRecord

  #購入可能かどうかを判定
  scope :buy_approval, -> (category) { 
    where(
      category_id: category,
      approval: true,
      created_at: Time.current.all_month
      )
  }

end