class CompostPilesController < ApplicationController
  def create
    render json: CompostPile.create(compost_file_params)
  end

  def show
    render json: CompostPile.find(params[:id])
  end

  private def compost_file_params
    # TODO: It seems like the responsibility for casting data-structures
    #       to the format the server wants is it's own _job_. We have a
    #       few different ways we could apply this job:
    #         A) Move the responsibility to the client;
    #            and rely on the API client to format for the
    #            server
    #         B) Create a 'Port' or Refinement that adapts the
    #            params keys to the ruby-style for us.
    params.transform_keys { |key| key.to_s.underscore.to_sym }.require(:compost_pile)
          .transform_keys { |key| key.to_s.underscore.to_sym }.permit(:composting_cents)
  end
end