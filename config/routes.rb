Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_for :users
  
  unauthenticated :user do
    root 'pages#home'
  end

  authenticated :user do
    root "pages#my_todo_items", as: :authenticated_root
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :todo_items, only: [:index, :show, :create, :update, :destroy]
    end
  end
end
