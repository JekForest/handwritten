// class EventEmitter {
//   constructor() {
//     this.events = new Map();
//   }

//   on(event, callback) {
//     if (!this.events.has(event)) {
//       this.events.set(event, new Set());
//     }

//     this.events.get(event).add(callback);
//   }

//   emit(event, ...args) {
//     if (!this.events.has(event)) return;

//     const callbacks = Array.from(this.events.get(event));

//     callbacks.forEach(callback => {
//       callback(...args);
//     })
//   }

//   off(event, callback) {
//     if (!this.events.has(event)) return;

//     if (callback) {
//       this.events.get(event).delete(callback);

//       if (this.events.get(event).size === 0) {
//         this.events.delete(event);
//       }
//     } else {
//       this.events.delete(event);
//     }
//   }

//   once(event, callback) {
//     const wrapper = (...args) => {
//       callback(...args);

//       this.off(event, wrapper);
//     }

//     this.on(event, wrapper)
//   }
// }


// class EventEmitter {
//   constructor() {
//     this.events = new Map();
//   }

//   on(event, callback) {
//     if (!this.events.has(event)) {
//       this.events.set(event, new Set());
//     }

//     this.events.get(event).add(callback);
//   }

//   emit(event, ...args) {
//     if (!this.events.has(event)) return;

//     const callbacks = Array.from(this.events.get(event));

//     callbacks.forEach(callback => {
//       callback(...args);
//     })
//   }

//   off(event, callback) {
//     if (!this.events.has(event)) return;

//     if (callback) {
//       this.events.get(event).delete(callback);

//       if (this.events.get(event).size === 0) {
//         this.events.delete(event);
//       }
//     } else {
//       this.events.delete(event);
//     }
//   }

//   once(event, callback) {
//     const wrapper = (...args) => {
//       callback(...args);

//       this.off(event, wrapper);
//     }

//     this.on(event, wrapper);
//   }
// }


class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(event, callback) {
    if (!this.events.has(event)) {
      this.events.set(event, new Set());
    }

    this.events.get(event).add(callback);
  }
  emit(event, ...args) {
    if (!this.events.has(event)) return;

    const callbacks = Array.from(this.events.get(event));

    callbacks.forEach(callback => {
      callback(...args);
    })
  }
  off(event, callback) {
    if (!this.events.has(event)) return;

    if (callback) {
      this.events.get(event).delete(callback)

      if (this.events.get(event).size === 0) {
        this.events.delete(event);
      }
    } else {
      this.events.delete(event);
    }
  }
  once(event, callback) {
    const wrapper = (...args) => {
      callback(...args);

      this.off(event, wrapper);
    }

    this.on(event, wrapper);
  }
}