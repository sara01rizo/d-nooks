class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :garbage_id
end
