function List() {
  List.makeNode = function nodes() {
    return { data: null, next: null };
  };

  this.start = null;
  this.end = null;

  this.add = function starting(data) {
    if (this.start === null) {
      this.start = List.makeNode();
      this.end = this.start;
    } else {
      this.end.next = List.makeNode();
      this.end = this.end.next;
    }
    this.end.data = data;
  };
}

List.data = ['data1', 'data2'];
List.next = List.two;
List.two = 'data4';
console.log(List.data[1]);
