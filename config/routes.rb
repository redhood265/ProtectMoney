Rails.application.routes.draw do
  root 'buy_items#index'
  resources :buy_items

end
