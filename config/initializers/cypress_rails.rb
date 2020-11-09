return unless Rails.env.test?

Rails.application.load_tasks unless defined?(Rake::Task)

CypressRails.hooks.before_server_start do
  # Called once, before either the transaction or the server is started
  spot = Dog.create(name: 'Spot', breed: 'Pug')
end

CypressRails.hooks.after_transaction_start do
end

CypressRails.hooks.after_state_reset do
  Dog.delete_all
  spot = Dog.create(name: 'Spot', breed: 'Pug')
end

CypressRails.hooks.before_server_stop do
  # Called once, at_exit
end
