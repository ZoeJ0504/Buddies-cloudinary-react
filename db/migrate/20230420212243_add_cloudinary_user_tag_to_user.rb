class AddCloudinaryUserTagToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :cloudinary_tag, :string
  end
end
