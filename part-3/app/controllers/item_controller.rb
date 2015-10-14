post '/item' do
  @item = Item.create(title: params[:title], condition: params[:condition], description: params[:description], creator_id: current_user_id)
  erb :"items/index"
end
