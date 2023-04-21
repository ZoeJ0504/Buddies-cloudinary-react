class PetSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :animal_type, :breed, :birthday, :user_id, :cloudinary_tag


belongs_to :user





end
