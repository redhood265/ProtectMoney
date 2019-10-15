class CreateBuyItems < ActiveRecord::Migration[6.0]
  def change
    create_table :buy_items do |t|
      t.integer :category_id
      t.string :name
      t.integer :price
      t.boolean :approval, default: false, null: false

      t.timestamps
    end
  end
end
