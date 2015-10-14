get '/users/new' do
  @user = User.new
  erb :'users/register'
end

post '/user' do
  @user = User.new(params[:new_user])
  @user.password = params[:password]
  if @user.save
    erb :'users/login'
  else
    erb :'users/register'
  end
end

get '/users/login' do
  @user = User.new
  erb :'users/login'
end

get '/users/logout' do
  session.clear
  erb :'items/index'
end

post '/users/login' do
  @user = User.find_by(username: params[:login][:username])
  if @user.password == params[:login][:password]
    session[:user_id] = @user.id
    erb :'items/index'
  else
    erb :'users/login'
  end
end

get '/users/:id' do |id|
  @user_items = Item.where(creator_id: id)
  erb :'users/show', {layout: false}
end

get '/users/:id/entries' do |id|
  if !User.where(id: id).empty?
    @entries = Entry.by_author(id)
    erb :'users/show'
  else
    @errors = "That user doesn't exist. Nice try though."
    @entries = Entry.most_recent
    erb :'entries/index'
  end
end
