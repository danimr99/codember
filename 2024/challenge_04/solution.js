import fs from "fs/promises";

async function readFile() {
  try {
    return await fs.readFile("./network.txt", "utf8");
  } catch (err) {
    console.error(err);
  }
}

function getSolution(data) {
  const graph = new Map();

  for (const [a, b] of data) {
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);

    graph.get(a).push(b);
    graph.get(b).push(a);
  }

  const components = [];
  const visited = new Set();

  function dfs(node, component) {
    component.push(node);
    visited.add(node);

    for (const neighbor of graph.get(node) || []) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, component);
      }
    }
  }

  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      const component = [];

      dfs(node, component);
      components.push(component);
    }
  }

  const safeNodes = [];

  for (const component of components) {
    if (component.length < 3) {
      safeNodes.push(...component);
    }
  }

  return safeNodes.sort((a, b) => a - b).join(",");
}

const file = await readFile();
const data = JSON.parse(file);
const nodes = getSolution(data);

console.log(nodes);
