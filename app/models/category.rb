class Category < ApplicationRecord
  #belongs_to :buy_items
  validates :name, uniqueness: true
  scope :category_list, -> { all.pluck(:name, :id)}

end
