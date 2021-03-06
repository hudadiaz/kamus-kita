class GenerateImageJob 
  include SuckerPunch::Job
  
  def perform(definition_id)
    ActiveRecord::Base.connection_pool.with_connection do
      definition = Definition.find(definition_id)
      definition.generate_image
    end
  end
end
