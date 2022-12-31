class Node {
  constructor(x, y, prev = null) {
    this.x = x;
    this.y = y;
    this.next1 = null;
    this.next2 = null;
    this.next3 = null;
    this.next4 = null;
    this.next5 = null;
    this.next6 = null;
    this.next7 = null;
    this.next8 = null;
    this.prev = prev;
  }
}

function validateCoord(x, y) {
  if (x < 1 || x > 8 || y < 1 || y > 8) return false;
  return true;
}

function generateNextNodes(node) {
  if (validateCoord(node.x + 2, node.y - 1)) node.next1 = new Node(node.x + 2, node.y - 1, node);
  if (validateCoord(node.x + 2, node.y + 1)) node.next2 = new Node(node.x + 2, node.y + 1, node);
  if (validateCoord(node.x - 2, node.y + 1)) node.next3 = new Node(node.x - 2, node.y + 1, node);
  if (validateCoord(node.x - 2, node.y - 1)) node.next4 = new Node(node.x - 2, node.y - 1, node);
  if (validateCoord(node.x + 1, node.y + 2)) node.next5 = new Node(node.x + 1, node.y + 2, node);
  if (validateCoord(node.x + 1, node.y - 2)) node.next6 = new Node(node.x + 1, node.y - 2, node);
  if (validateCoord(node.x - 1, node.y + 2)) node.next7 = new Node(node.x - 1, node.y + 2, node);
  if (validateCoord(node.x - 1, node.y - 2)) node.next8 = new Node(node.x - 1, node.y - 2, node);
}

function getNodeslevelOrder(root) {
  if (root == null) return undefined;
  const nodes = [];
  const q = []; // queue
  q.push(root);
  // While there is at least one discovered node
  while (q.length > 0) {
    const current = q[0];
    nodes.push(current);
    // console.log(current.x, current.y);
    if (current.next1) q.push(current.next1);
    if (current.next2) q.push(current.next2);
    if (current.next3) q.push(current.next3);
    if (current.next4) q.push(current.next4);
    if (current.next5) q.push(current.next5);
    if (current.next6) q.push(current.next6);
    if (current.next7) q.push(current.next7);
    if (current.next8) q.push(current.next8);
    q.shift();
  }
  return nodes;
}

export function knightTravails(startX, startY, endX, endY) {
  if (startX < 1 || startX > 8 || startY < 1 || startY > 8 || endX < 1
     || endX > 8 || endY < 1 || endY > 8) return null;

  const startNode = new Node(startX, startY);
  const visitedNodes = [];
  let allNodes = [];
  let unvisitedNodes = [];
  let nodeFound;

  generateNextNodes(startNode); // Genereted maximum of 8 nodes from initial node
  visitedNodes.push(startNode); // Added initial node to list of already generated
  allNodes = getNodeslevelOrder(startNode);
  // Got a list with all nodes so far since the initial node
  unvisitedNodes = allNodes.filter((value) => !visitedNodes.includes(value));
  // Unvisited nodes contain all elements of allNodes except the ones that are also in visitedNodes

  while (!nodeFound) {
    for (let i = 0; i < unvisitedNodes.length; i += 1) {
      if (unvisitedNodes[i].x === endX && unvisitedNodes[i].y === endY) {
        nodeFound = unvisitedNodes[i];
        break;
      }
    }
    if (!nodeFound) {
      for (let i = 0; i < unvisitedNodes.length; i += 1) {
        generateNextNodes(unvisitedNodes[i]);
        visitedNodes.push(unvisitedNodes[i]);
      }
      allNodes = getNodeslevelOrder(startNode);
      unvisitedNodes = allNodes.filter((value) => !visitedNodes.includes(value));
    }
  }

  return nodeFound;
}

export function getPathFromRoot(node) {
  if (node) {
    const path = [];
    path.unshift([node.x, node.y]);
    if (node) {
      while (node.prev) {
        node = node.prev;
        path.unshift([node.x, node.y]);
      }
    }
    return path;
  }
  return null;
}
