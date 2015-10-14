class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title, { null: false, index: true }
      t.string :condition, { null: false }
      t.string :description, { null: false }

      t.timestamps(null: false)
    end
  end
end
