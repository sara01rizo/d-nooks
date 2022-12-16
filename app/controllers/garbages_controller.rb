module Api
  module V1
    class GarbagesController < ApplicationController
      def index
        garbages = Garbage.all

        render json: GarbageSerializer.new(garbages, options).serialized_json
      end

      def show
        garbage = Garbage.find_by(slug: params[:slug])

        render json: GarbageSerializer.new(garbage, options).serialized_json
      end

      def create
        garbage = Garbage.new(airline_params)

        if garbage.save
          render json: GarbageSerializer.new(garbage).serialized_json
        else
          render json: { error: garbage.errors.messages }, status: 422
        end
      end

      def update
        garbage = Garbage.find_by(slug: params[:slug])

        if garbage.update(garbage_params)
          render json: GarbageSerializer.new(garbage, options).serialized_json
        else
          render json: { error: garbage.errors.messages }, status: 422
        end
      end

      def destroy
        garbage = Garbage.find_by(slug: params[:slug])

        if garbage.destroy
          head :no_content
        else
          render json: { error: garbage.errors.messages }, status: 422
        end
      end

      private

      def garbage_params
        params.require(:garbage).permit(:name, :image_url)
      end

      def options
        @options ||= { include: %i[reviews] }
      end



    end
  end
end
