# app/views/api/v1/todo_items/index.json.jbuilder
json.array! @todo_items, partial: "api/v1/todo_items/todo_item", as: :todo_item
