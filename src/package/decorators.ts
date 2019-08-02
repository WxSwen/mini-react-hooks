function f() {
  console.log("f(): evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      // console.log(target, propertyKey, descriptor);
  }
}

function g() {
  console.log("g(): evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      // console.log(target, propertyKey, descriptor);
  }
}

function format(formatString: string) {
  return 
}

export {
  f,
  g,
  format
};