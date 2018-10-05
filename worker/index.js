/**
 * Author: Bhautik Chudasama
 */

/**
 * Worker is used to perform parallel tasks.
 * MAIN[thread]
 * MAIN[thread] -- WORKER[thread]
 */

// create an object
const worker = new Worker("./worker.js");

/**
 * Called when message arrive.
 */
worker.onmessage = message => {
  console.log(message);
}
