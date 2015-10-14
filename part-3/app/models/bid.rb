class Bid < ActiveRecord::Base
  validates :bid, { presence: true }
  belongs_to :user
  belongs_to :item
end
