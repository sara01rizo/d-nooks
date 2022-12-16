class CreateGarbages < ActiveRecord::Migration[7.0]
  def change
    create_table :garbages do |t|
      t.string :name
      t.string :image_url
      t.string :content
      t.string :status
      t.datetime :up_date
      t.string :slug
      t.string :location

      t.timestamps
    end
  end
end
