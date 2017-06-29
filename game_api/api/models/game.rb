class Game
  attr_reader :name, :code, :cost

  def initialize (name, code, cost)
    @name = name
    @code = code
    @cost = cost
  end
end
