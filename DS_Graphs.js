class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    
    // Add a vertex in graph / adjacencyList
    addVertex(vertex) {
         if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]  = []
    }

    // Develop Connections between two vertex
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2) 
        this.adjacencyList[v2].push(v1)
    }

    // Remove Connections between two vertices
    removeEdge(vertex1, vertex2) {
        // Remove vertex2 from v1 
       this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
             v => v != vertex2
       )

        // Remove vertex1 from v2 
       this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
             v => v != vertex1
       )
    }

    // Remove Vertex
    removeVertex(vertex) {
        // Remove All edges with this vertex
        this.adjacencyList[vertex].map(e => {
            this.removeEdge(vertex, e)
        })
        delete this.adjacencyList[vertex]
    }

    /** Traversing the Graph Methods */

    // Depth First Recursive 
    depthFirstRecursive(start) {  
        const result = []
        const visited = {}
        var adjacencyList = this.adjacencyList
        function dfs(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex)
            adjacencyList[vertex].forEach( neighbour => {
                if(!visited[neighbour]) {
                    return dfs(neighbour)
                }
            })
        }
        dfs(start)
        
        return result
    }

    // Depth First Iterative
    depthFirstIterative(start){
        let stackArr = [start]
        let resultArr = []
        let visited = {}
        visited[start] = true
        let currentVertex


        while(stackArr.length) {
            currentVertex = stackArr.pop()
            resultArr.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true
                    stackArr.push(neighbour)
                }
            })
        }

        return resultArr
    }

    // Breadth First Traversing
    breadthFirst(start) {
        const queue = [start]
        const result = []
        const visited = {}
        let currentVertex
        visited[start] = true

        while(queue.length) {
            currentVertex = queue.shift() 
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach( neighbour => {
                if(!visited[neighbour]) {
                   visited[neighbour] = true
                   queue.push(neighbour)
                     
                } 
            })
        }
        return result
    }

    /** Traversing the Graph Methods */
}

const g = new Graph();
// g.addVertex("Mumbai")
// g.addVertex("Dubai")
// g.addVertex("London")

// g.addEdge("Mumbai", "Dubai")
// g.addEdge("Mumbai", "London")
// g.addEdge("Dubai", "London")

 g.addVertex("A");
 g.addVertex("B");
 g.addVertex("C");
 g.addVertex("D");
 g.addVertex("E");
 g.addVertex("F");

 g.addEdge("A", "B")
 g.addEdge("A", "C")
 g.addEdge("B", "D")
 g.addEdge("C", "E")
 g.addEdge("D", "E")
 g.addEdge("D", "F")
 g.addEdge("E", "F")

//        A
//      /   \
//     B     C
//     |     | 
//     D --- E
//     \    /
//        F  