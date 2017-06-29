module GameApi
  class App
    def self.instance
      @instance ||= Rack::Builder.new do
        use Rack::Cors do
          allow do
            origins '*'
            resource '*', headers: :any, methods: :get
          end
        end

        run GameApi::App.new
      end.to_app
    end

    def call(env)
      response = GameApi::API.call(env)

      case response[0]
      when 404, 500
        [response[0], content[1], content[2]]
      else
        response
      end
    end
  end
end
