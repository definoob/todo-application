# app/views/api/v1/todo_items/show.json.jbuilder
json.partial! "api/v1/todo_items/todo_item", todo_item: @todo_item
