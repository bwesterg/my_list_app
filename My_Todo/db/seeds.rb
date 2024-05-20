# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# Movie.create!([{
#   title: "Soul",
#   director: "Pete Docter",
#   storyline: "After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.",
#   watched_on: 1.week.ago
# },

# Todo name description urgency:integer urgent:boolean done:boolean

Todo.destroy_all

Todo.create(
  [
    {
      name: "Walk the dog",
      description: "Take Ellie for a two or three mile walk",
      urgency: 3,
      urgent: false,
      done: false,
    },
    {
      name: "Go to the store",
      description: "buy some food",
      urgency: 2,
      urgent: false,
      done: false,
    },
    {
      name: "Pay taxes",
      description: "Pay the man",
      urgency: 5,
      urgent: true,
      done: false,
    },
  ]
)