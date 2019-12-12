class FixedMultiStack {
  constructor(stackSize, numStacks) {
    this.numberOfStacks = numStacks
    this.capacity = stackSize
    this.sizes = new Array(numStacks).fill(0)
    this.values = new Array(stackSize * numStacks)
  }

  push (stackNum, value) {
    if (this.isFull(stackNum)) throw new Error(`Stack ${stackNum} is full`)

    const index = this.indexOfTop(stackNum)

    this.values[index] = value
    this.sizes[stackNum]++

    return this
  }

  pop (stackNum) {
    if (this.isEmpty(stackNum)) throw new Error(`Stack ${stackNum} is empty`)

    const index = this.indexOfTop(stackNum) - 1
    const element = this.values[index]
    delete this.values[index]

    this.sizes[stackNum]--

    return element
  }

  peek (stackNum) {
    if (this.isEmpty(stackNum)) throw new Error(`Stack ${stackNum} is empty`)

    return this.values[this.indexOfTop(stackNum)]
  }

  isFull (stackNum) {
    const size = this.sizes[stackNum]

    return size === this.capacity
  }

  isEmpty (stackNum) {
    const size = this.sizes[stackNum]

    return size === 0
  }

  indexOfTop (stackNum) {
    const offset = stackNum * this.capacity
    const size = this.sizes[stackNum]

    return offset + size
  }
}

const stack = new FixedMultiStack(5, 5)
stack.push(0, 1)
stack.push(0, 2)
stack.push(0, 3)
stack.push(0, 4)
stack.push(0, 5)
stack.push(2, 6)
stack.push(2, 7)

stack.pop(0)
stack.pop(0)

stack.pop(2)

console.log(stack)