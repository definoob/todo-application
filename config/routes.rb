Rails.application.routes.draw do
  devise_for :users
  
  unauthenticated :user do
    root 'pages#home'
  end

  authenticated :user do
    root "pages#my_todo_items", as: :authenticated_root
  end  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
