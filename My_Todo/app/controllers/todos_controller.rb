class TodosController < ApplicationController
  before_action :find_todo, only: [:update, :destroy]
  def index
    @todos = Todo.all
    render json: @todos
  end

  def create
    # @todo = Todo.create(
    #   name: params[:name],
    #   description: params[:description],
    #   urgency: params[:urgency],
    #   urgent: params[:urgent],
    #   done: params[:done]
    # )
    @todo = Todo.create(todo_params)

    render json: @todo, status: :created
  end

  def update
    # @todo = Todo.find(params[:id])
    @todo.update(todo_params)
    render json: @todo
  end

  def destroy
    # @todo = Todo.find(params[:id])
    @todo.destroy
    render status: :no_content
  end
  

  private

  def find_todo
    @todo = Todo.find(params[:id])
  end

  def todo_params
    params.require(:todo).permit(:name, :description, :urgency, :urgent, :done)
  end
end
