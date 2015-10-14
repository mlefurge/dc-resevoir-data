class User < ActiveRecord::Base
  validates :username, :password_hash, { presence: true }
  validates :username, uniqueness: true
  validates :password_hash, length: { minimum: 6 }
  has_many :items
  has_many :bids
  has_many :items, through: :bids

  # users.password_hash in the database is a :string
  include BCrypt

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

end
