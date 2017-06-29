require 'minitest/autorun'
require '../game'

describe Game do
  before do
    @Game = Game.new('Sonic the Hedgehog', 'R12', 6.99)
  end

  describe "#name" do
    it "returns the name of the game" do
      @Game.name.must_equal 'Sonic the Hedgehog'
    end
  end

  describe "#code" do
    it "returns the code of the game" do
      @Game.code.must_equal 'R12'
    end
  end

  describe "#cost" do
    it "returns the cost of the game" do
      @Game.cost.must_equal 6.99
    end
  end
end
