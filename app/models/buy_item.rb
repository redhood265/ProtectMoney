class BuyItem < ApplicationRecord

  scope :approval_sum, -> { where(approval: true).sum(:price)}
end
