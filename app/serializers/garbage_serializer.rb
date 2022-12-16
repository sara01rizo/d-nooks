class GarbageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :location, :image_url, :content, :status, :slug, :up_date

  has_many :reviews
end
