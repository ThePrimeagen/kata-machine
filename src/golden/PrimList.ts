export default function prims(list: WeightedAdjacencyList): WeightedAdjacencyList | null {

    // Prims algorithm :: minimum spanning tree
    // What is a minimum spanning tree?
    //  - Requires no cycles
    //  - For it to technically be a minimum spanning tree, the graph requires
    //  to be strongly connected
    // 1. Select starting node,
    // 2. put edges of current selected node into a list
    // 3. select edge that is the lowest value and to a node we haven't seen yet
    // 4. we need to insert the edge from current to new into our mst
    // 5. the newly selected node becomes the current node,
    // 6. repeate to step 2 until unvisited is empty or unreachable
    // ...
    // 8. $$

    const visited: boolean[] = new Array(list.length).fill(false);
    const mst: GraphEdge[][] = new Array(list.length).fill(null).map(() => []);

    // 1.
    visited[0] = true;
    let current = 0;

    const edges: [number, GraphEdge][] = [];

    do {
        // 2. put all dem edges in the list
        for (const edgemeDaddy of list[current]) {
            edges.push([current, edgemeDaddy]);
        }

        // 3. select edge that is the lowest value and to a node we haven't seen yet
        let lowest = Infinity;
        let lowestEdge: [number, GraphEdge | null] = [-1, null];
        for (const edge of edges) {
            if (visited[edge[1].to] === false && edge[1].weight < lowest) {
                lowest = edge[1].weight;
                lowestEdge = edge;
            }
        }

        // 4. we need to insert the edge from current to new into our mst, set visited, and remove the potential edge
        if (lowestEdge[1] !== null) {
            mst[lowestEdge[0]].push(lowestEdge[1]);
            mst[lowestEdge[1].to].push({to: lowestEdge[0], weight: lowestEdge[1].weight});
            visited[lowestEdge[1].to] = true;
            edges.splice(edges.indexOf(lowestEdge as [number, GraphEdge]), 1);
        }

        // 5. the newly selected node becomes the current node
        current = lowestEdge[1]?.to || -1;

    } while (visited.includes(false) && current >= 0);

    return mst;
}

if (require.main === module) {
    prims([
        [ // 0
            { to: 2, weight: 1 },
            { to: 1, weight: 3 },
        ],
        [ // 1
            { to: 0, weight: 3 },
            { to: 4, weight: 1 },
            { to: 3, weight: 3 },
        ],
        [// 2
            { to: 0, weight: 1 },
            { to: 3, weight: 7 },
        ],
        [ // 3
            { to: 6, weight: 1 },
            { to: 1, weight: 3 },
            { to: 2, weight: 7 },
        ],
        [ // 4
            { to: 1, weight: 1 },
            { to: 5, weight: 2 },
        ],
        [ // 5
            { to: 4, weight: 2 },
            { to: 6, weight: 1 },
        ],
        [ // 6
            { to: 5, weight: 1 },
            { to: 3, weight: 1 },
        ],
    ]);
}

