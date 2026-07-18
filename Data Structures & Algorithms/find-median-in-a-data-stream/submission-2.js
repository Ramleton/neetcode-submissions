class MedianFinder {
    maxHeap;
    minHeap;
    constructor() {
        this.maxHeap = [];
        this.minHeap = [];
    }

    getHeap(isMinHeap) {
        return isMinHeap ? this.minHeap : this.maxHeap;
    }

    bubbleUp(isMinHeap) {
        const heap = this.getHeap(isMinHeap);
        let currIdx = heap.length - 1;
        let parentIdx = Math.floor((currIdx - 1) / 2);
        let parent = heap[parentIdx];
        let comp = isMinHeap
            ? parent > heap[currIdx]
            : parent < heap[currIdx];
        while (comp) {
            heap[parentIdx] = heap[currIdx];
            heap[currIdx] = parent;
            currIdx = parentIdx;
            parentIdx = Math.floor((currIdx - 1) / 2);
            parent = heap[parentIdx];
            comp = isMinHeap
            ? parent > heap[currIdx]
            : parent < heap[currIdx];
        }
    }

    chooseChildIdx(currIdx, heap, isMinHeap) {
        let leftIdx = 2 * currIdx + 1;
        let rightIdx = leftIdx + 1;
        if (leftIdx > heap.length - 1)
            return undefined;
        if (rightIdx > heap.length - 1)
            return leftIdx;
        if (isMinHeap) {
            return heap[leftIdx] < heap[rightIdx]
            ? leftIdx
            : rightIdx;
        } else {
            return heap[leftIdx] > heap[rightIdx]
                ? leftIdx
                : rightIdx;
        }
    }

    siftDown(isMinHeap) {
        const heap = this.getHeap(isMinHeap);
        if (!heap.length) return undefined;
        if (heap.length === 1) return heap.pop();
        let temp = heap[0];
        heap[0] = heap[heap.length - 1];
        heap[heap.length - 1] = temp;
        const oldRoot = heap.pop();
        let currIdx = 0;
        let childIdx = this.chooseChildIdx(currIdx, heap, isMinHeap);
        let comp = isMinHeap
            ? heap[currIdx] > heap[childIdx]
            : heap[currIdx] < heap[childIdx];
        while (
            childIdx &&
            comp
        ) {
           temp = heap[childIdx];
           heap[childIdx] = heap[currIdx];
           heap[currIdx] = temp;
           currIdx = childIdx;
           childIdx = this.chooseChildIdx(currIdx, heap, isMinHeap);
           comp = isMinHeap
            ? heap[currIdx] > heap[childIdx]
            : heap[currIdx] < heap[childIdx];
        }
        return oldRoot;
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (!this.minHeap.length || this.minHeap[0] < num) {
            this.minHeap.push(num);
            this.bubbleUp(true);
        } else {
            this.maxHeap.push(num);
            this.bubbleUp(false);
        }
        if (this.minHeap.length > this.maxHeap.length + 1) {
            this.maxHeap.push(this.siftDown(true));
            this.bubbleUp(false);
        } else if (this.minHeap.length < this.maxHeap.length - 1) {
            this.minHeap.push(this.siftDown(false));
            this.bubbleUp(true);
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.minHeap.length > this.maxHeap.length)
            return this.minHeap[0];
        if (this.minHeap.length < this.maxHeap.length)
            return this.maxHeap[0];
        return (this.minHeap[0] + this.maxHeap[0]) / 2;
    }
}
