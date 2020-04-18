# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_19_003316) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "compost_piles", force: :cascade do |t|
    t.integer "composting_cents", default: 0, null: false
    t.string "composting_currency", default: "USD", null: false
    t.integer "available_cents", default: 0, null: false
    t.string "available_currency", default: "USD", null: false
    t.integer "distributed_cents", default: 0, null: false
    t.string "distributed_currency", default: "USD", null: false
    t.integer "returned_cents", default: 0, null: false
    t.string "returned_currency", default: "USD", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
