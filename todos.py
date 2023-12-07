from flask import Flask, request, jsonify

app = Flask(__name__)
todos = []

@app.route('/todos', methods=['GET'])
def get_todos():
    return jsonify(todos)

@app.route('/todos', methods=['POST'])
def create_todo():
    data = request.get_json()
    todos.append(data)
    return jsonify({'message': 'Todo created successfully'})

@app.route('/todos/<int:index>', methods=['PUT'])
def update_todo(index):
    data = request.get_json()
    if 0 <= index < len(todos):
        todos[index] = data
        return jsonify({'message': 'Todo updated successfully'})
    return jsonify({'message': 'Todo not found'}, 404)

@app.route('/todos/<int:index>', methods=['DELETE'])
def delete_todo(index):
    if 0 <= index < len(todos):
        del todos[index]
        return jsonify({'message': 'Todo deleted successfully'})
    return jsonify({'message': 'Todo not found'}, 404)

if __name__ == '__main__':
    app.run(debug=True,port=8800)