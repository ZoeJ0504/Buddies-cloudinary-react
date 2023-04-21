class PetsController < ApplicationController

    def index 
        render json: Pet.all
    end

    def create
        pet = Pet.create!(pet_params)
        render json: pet
    end

    def update
        p = Pet.find(params[:id])
        p.update(:name => params[:name], :animal_type => params[:animal_type], :breed => params[:breed], :birthday => params[:birthday])
        render json: p
    end 

    def destroy 
        p = Pet.find(params[:id])
        p.destroy
        render json: p 
    end

    def update_image 
        p = Pet.find(params[:id])
        p.update(:pet_image => params[:pet_image])
        render json: p 
    end 

    private

    def pet_params
        params.permit(:name, :animal_type, :breed, :birthday, :user_id, :cloudinary_tag )
    end

end
