module GameApi
  class API < Grape::API
    prefix 'api'
    format :json
    mount ::GameApi::OrderGame
    mount ::GameApi::GetGames
    add_swagger_documentation api_version: 'v1'
  end
end
