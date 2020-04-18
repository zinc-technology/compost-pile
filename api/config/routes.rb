# frozen_string_literal: true

Rails.application.routes.draw do
  resources :compost_piles, only: [:create, :show]
end
