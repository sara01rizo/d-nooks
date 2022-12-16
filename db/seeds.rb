# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Garbage.create([
  {
    name: 'Yellow',
    image_url: "https://git/gelbtonne.png"
  },
  {
    name: 'Orange',
    image_url: "https://git/gelbtonne.png"
  },
  {
    name: 'Red',
    image_url: "https://git/gelbtonne.png"
  },
  {
    name: 'Brown',
    image_url: "https://git/gelbtonne.png"
  },
  {
    name: 'Blue',
    image_url: "https://git/gelbtonne.png"
  },
  {
    name: 'Green',
    image_url: "https://git/gelbtonne.png"
  }
])

reviews = Review.create([
  {
    title: 'Open your eyes',
    description: 'Just open your eyes to see the big trash can',
    score: 5,
    garbage: garbages.first
  },
  {
    title: 'Move your hands',
    description: 'Time to move your hands for good',
    score: 5,
    garbage: garbages.first
  }
])
