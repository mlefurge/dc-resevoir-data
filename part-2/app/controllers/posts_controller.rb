get "/posts" do
  @posts = Post.order("created_at DESC")
  erb :'posts/index'
end

post "/posts" do
  @post = Post.new(params[:post])

  if @post.save
    redirect "posts/#{@post.id}"
  end
end

get "/posts/new" do
  @post = Post.new
  erb :'posts/new'
end

get "/posts/form" do
  @post = Post.new
  erb :'posts/_form', { layout: false, locals: { post: @post } }
end

get "/posts/:id" do
  @post = Post.find(params[:id])
  erb :'posts/show'
end

post "/posts/new" do
  @post = Post.new(params[:post])

  if @post.save
    erb :'posts/_post', { layout: false, locals: {post: @post}}
  end

end


