class Item < ActiveRecord::Base
  validates :title, :condition, :description, { presence: true }
  belongs_to :user
  has_many :bids
end
