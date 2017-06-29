require 'pp'

class Order
  attr_reader :amount, :game, :total_cost

  def initialize (amount, game)
    @amount = amount
    @game = game
    @total_cost = amount * game.cost
  end

  def receipt
    "#{amount} x #{game.name} = #{total_cost}"
    # puts @total_cost.pretty_inspect
  end
end
