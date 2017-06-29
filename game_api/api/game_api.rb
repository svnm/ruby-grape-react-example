require 'yaml'
require_relative './models/order'
require_relative './models/game'

module GameApi
  class GetGames < Grape::API
    cattr_accessor :response

    get :get_games do
      puts Dir.pwd
      data = YAML.load_file './mock_games.yaml'
      { response: data }
    end
  end

  class OrderGame < Grape::API
    cattr_accessor :response

    params do
      requires :total, :code
    end
    format :json

    get :order_game do
      game = Game.new('Sonic the hedgehod', 'R12', 6.99)
      game2 = Game.new('Super Mario Brothers', 'L09', 9.95)
      game3 = Game.new('The legend of zelda', 'T58', 5.95)
      #game = Game.get_game_by_code(code)

      if params[:total] && params[:code]
        order = Order.new(10, game)
        #orders.push(Order.new(amount, game.code, game.cost))
        #order.add(params[:total].to_i, params[:code])
      end

      { response: order.receipt() }
    end
  end
end
