class AddCloudinaryTagToPet < ActiveRecord::Migration[7.0]
  def change
    add_column :pets, :cloudinary_tag, :string
  end
end
