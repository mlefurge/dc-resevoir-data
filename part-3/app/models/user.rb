class User < ActiveRecord::Base
  has_many :shirts, foreign_key: :designer_id
  has_many :purchases
  has_many :shirts, through: :purchases
end
