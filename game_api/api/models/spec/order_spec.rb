require 'minitest/autorun'
require '../order'
require '../game'

describe Order do
  before do
    game = Game.new('Sonic the Hedgehog', 'R12', 6.99)
    @Order = Order.new(10, game)
  end

  describe "#amount" do
    it "returns the amount of the order" do
      @Order.amount.must_equal 10
    end
  end

  describe "#game_code" do
    it "returns the game code of the order" do
      @Order.game.code.must_equal 'R12'
    end
  end

  describe "#total_cost" do
    it "returns the total_cost of the order" do
      @Order.total_cost.must_equal 69.9
    end
  end

  describe "#receipt" do
    it "returns the order receipt" do
      @Order.receipt.must_equal "10 x Sonic the Hedgehog = 69.9"
    end
  end
end
