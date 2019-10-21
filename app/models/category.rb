class Category < ApplicationRecord
  belongs_to :buy_items 
  scope :category_list, -> { all.pluck(:name, :id)}
end
