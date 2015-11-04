class shirts < ActiveRecord::Base
  belongs_to :designer, class_name: "User"
  has_many :purchases
  has_many :users, through: :purchases
end
