helpers do

 def logged_in?
  session[:user_id]
 end

 def current_user
  User.find_by(id: session[:user_id])
 end

 def current_user_name
  User.find_by(id: session[:user_id]).username if logged_in?
 end

 def current_user_id
  User.find_by(id: session[:user_id]).id if logged_in?
 end

end
