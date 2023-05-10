class State:
    def __init__(self, jug1, jug2):
        self.jug1 = jug1
        self.jug2 = jug2

    def __eq__(self, other):
        return self.jug1 == other.jug1 and self.jug2 == other.jug2

    def __hash__(self):
        return hash((self.jug1, self.jug2))


def dfs_search(jug1_capacity, jug2_capacity, target):
    stack = [(State(0, 0), [])]
    visited = set()

    while stack:
        current_state, path = stack.pop()
        visited.add(current_state)

        if current_state.jug1 == target or current_state.jug2 == target:
            path.append(current_state)
            return path

        next_states = []

        # Fill jug1
        next_states.append((State(jug1_capacity, current_state.jug2), 'Fill Jug 1'))

        # Fill jug2
        next_states.append((State(current_state.jug1, jug2_capacity), 'Fill Jug 2'))

        # Empty jug1
        next_states.append((State(0, current_state.jug2), 'Empty Jug 1'))

        # Empty jug2
        next_states.append((State(current_state.jug1, 0), 'Empty Jug 2'))

        # Pour jug1 to jug2
        pour_amount = min(current_state.jug1, jug2_capacity - current_state.jug2)
        next_states.append((State(current_state.jug1 - pour_amount, current_state.jug2 + pour_amount), 'Pour Jug 1 to Jug 2'))

        # Pour jug2 to jug1
        pour_amount = min(jug1_capacity - current_state.jug1, current_state.jug2)
        next_states.append((State(current_state.jug1 + pour_amount, current_state.jug2 - pour_amount), 'Pour Jug 2 to Jug 1'))

        for next_state, action in next_states:
            if next_state not in visited:
                stack.append((next_state, path + [action]))

    return None


# Example usage
jug1_capacity = 4
jug2_capacity = 3
target = 2

solution = dfs_search(jug1_capacity, jug2_capacity, target)

if solution:
    print("Solution found:")
    for i, step in enumerate(solution):
        print(f"Step {i + 1}: {step}")
else:
    print("No solution found.")
