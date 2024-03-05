Rails.application.routes.draw do
  # API routes should be in /api/v1
  namespace :api do
    namespace :v1 do
      get 'search/posts'
      resources :posts
    end
  end
  #resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
