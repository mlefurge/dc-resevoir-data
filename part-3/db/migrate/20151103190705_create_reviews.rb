class CreateReviews < ActiveRecord::Migration
  def change
    t.integer :designer_id,  null: false
  end
end
