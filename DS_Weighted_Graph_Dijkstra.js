class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}


class WeightedGraph {
    
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight })
        this.adjacencyList[vertex2].push({ node: vertex1, weight })
    }

    Dijkstra(start, finish) {

        // Create a PriorityQueue
        const nodes = new PriorityQueue();
        const distances = {}
        const previous = {}
        let smallest;
        let finalPath = []

        // Build Up initial state
        // Set distances of all vertex to infinity and start vertex to 0
        for( let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity )
            }
            previous[vertex] = null
        }

        // As long as there is something in queue
        while(nodes.values.length) {
            smallest = nodes.dequeue().val // this is the element with highest priority (first in the queue)
            if(smallest === finish) {
                // We are done 
                // Build up path to return at end 
               
                while(previous[smallest]) {
                    finalPath.push(smallest)
                    smallest = previous[smallest]
                }
            
                break;
            }

            if(smallest || distances[smallest] !== Infinity) {
                 for(let neighbour in this.adjacencyList[smallest] ) {

                     // Find Neighbouring Nodes 
                     let nextNode = this.adjacencyList[smallest][neighbour]

                     //  Calculate neighbour distance from smallest
                     let nextNeighboursDistance = distances[smallest]+ nextNode.weight
                     let nextNeighbour = nextNode.node
                     if(nextNeighboursDistance < distances[nextNeighbour]) {

                         // Update new smallest distance to neighbour
                         distances[nextNeighbour] = nextNeighboursDistance

                         // Updating previous - How we got to neighbour
                         previous[nextNeighbour] = smallest

                         // Enqueu in priority queue with new priority
                         nodes.enqueue(nextNeighbour, nextNeighboursDistance)
                     }
                 } 
            }

        }
    
        return finalPath.concat(smallest).reverse()
        

    }
}


var graph = new WeightedGraph()
// Add Vertex
// graph.addVertex("Mumbai");
// graph.addVertex("Dubai");
// graph.addVertex("London");

// Add Edges with Weight 
// graph.addEdge("Mumbai", "Dubai", 3)
// graph.addEdge("Mumbai", "London", 11)
// graph.addEdge("Dubai", "London", 7)

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


// This is Weighted Graph , use of WeightedGraph is to find the shortest path possible , commonly used in maps 
// Here we implement Dijkstra's Algorith using the weighted graph
graph.Dijkstra("A", "E")