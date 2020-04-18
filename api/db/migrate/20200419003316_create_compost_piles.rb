class CreateCompostPiles < ActiveRecord::Migration[6.0]
  def change
    create_table :compost_piles do |t|
      t.monetize :composting
      t.monetize :available
      t.monetize :distributed
      t.monetize :returned
      t.timestamps
    end
  end
end
