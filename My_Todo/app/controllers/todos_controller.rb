class TodosController < ApplicationController

  def index
    @todos = Todo.all
    render json: @todos
  end

  def create
    @todo = Todo.create(
      name: params[:name],
      description: params[:description],
      urgency: params[:urgency],
      urgent: params[:urgent],
      done: params[:done]
    )
    render json: @todo, status: :created
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    render status: :no_content
  end 
end
