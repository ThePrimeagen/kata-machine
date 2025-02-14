export function add_node_list(
  list: WeightedAdjacencyList,
  from: number,
  to: number,
  weight: number,
): void {
  let l = list[from];
  if (!l) {
    l = list[from] = [];
  }

  l.push({ to, weight });
}
