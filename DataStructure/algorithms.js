const strings = ["a","b","c","d"];
//4*4 = 16 bytes of storage


//push 
strings.push('z') // 0(1)
//unshift 
strings.unshift('x'); //0(n)
//splice
strings.splice(2,0,'helo') // 0(n)


// C++ 


/////////////class/////////////////////

class Myarray {
  constructor(){
    this.length = 0;
      this.data = {}
  }
  get(index){
    return this.data[index]
  }
  push(item){
    this.data[this.length] = item;
    this.length ++
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1]
    this.length--;
    return lastitem;
  }
  delete(index) {
    const item = this.data[index]
    this.shiftItems(index)
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1 ; i++){
      this.data[i] = this.data[i+1]
    }
    // this.data[this.length]
  }
}

const newArray = new Myarray();
newArray.push('hi')
// newArray.pop();
newArray.delete(1)