# app/views/api/v1/todo_items/_todo_item.json.jbuilder
json.extract! todo_item, :id, :title, :user_id, :complete, :created_at, :updated_at
