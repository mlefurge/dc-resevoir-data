class CreateBids < ActiveRecord::Migration
  def change
    create_table :bids do |t|
    t.integer :bid, { null: false, index: true }
    t.integer :user_id, { null: false }
    t.integer :item_id, { null: false }

    t.timestamps(null: false)
    end
  end
end
