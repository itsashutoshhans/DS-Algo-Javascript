// https://leetcode.com/problems/number-of-recent-calls/


var RecentCounter = function() {
    // intialize the queue
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    /** 
     * whenever there is a ping check if the first item in the queue
     * comes under the range of 3000 ms from the current time, if not 
     * then dequeue ( shift operation in this case ). Continue this till 
     * the first item is in the range
     */
    
    this.queue.push(t);
    
    while(this.queue[0] < t - 3000){ this.queue.shift(); }
    
    return this.queue.length;
    
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */