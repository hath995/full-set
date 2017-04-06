let chai = require('chai');
let assert = chai.assert;
let FullSet = require('../src/set');


describe("FullSet", function() {

  it("should report if it contains an element", function() {
    let A = new FullSet('1','2','3');
    let elems = ['1', '2', '3'];
    for(let i = 0; i < elems.length; i++) {
      assert.isTrue(A.contains(elems[i]), 'contains the starting elements');
    }
    assert.isFalse(A.contains('4'), 'not contain anything else');
      
  });

  it("should compare sets for equality", function() {
    let A = new FullSet('1','2');
    let B = new FullSet('1','2');
    let E = new FullSet('1','2','1','2');
    assert.isTrue(A.equal(B), "equal sets should equal");
    assert.isTrue(A.equal(E), "duplicates don't matter");
    
    let C = new FullSet('1','2','3');
    let D = new FullSet('1','3');
    assert.isFalse(A.equal(C));
    assert.isFalse(A.equal(D));
    assert.isFalse(A.equal(D));
  });

  it("should add elements to a set", function() {
    let A = new FullSet('A','B');
    A.add('C','D','E');
    let elems = ['A','B','C','D','E'];
    for(let i = 0; i < elems.length; i++) {
      assert.isTrue(A.contains(elems[i]), 'contains the starting elements');
    }
  });
  
  it("should create clones of sets", function() {
    let A = new FullSet('TOAST','EGGS','BACON');
    let B = A.clone();
    assert.isTrue(A !== B, 'not the same object in memory');
    assert.isTrue(A.equal(B), 'they contain the same things');
  });

  it("should remove elements from a set", function() {
    let A = new FullSet('A','B','C','D','E');
    assert.isTrue(A.contains('D'), 'show D is there');
    assert.isTrue(A.contains('E'), 'show E is there');
    A.remove('D','E');
    assert.isFalse(A.contains('D'), 'remove D');
    assert.isFalse(A.contains('E'), 'remove E');
  });

  it("should produce a union of sets", function() {
    let A = new FullSet("A","B");
    let B = new FullSet("D","E");  
    let C = A.union(B);
    let elems = ['A','B','D','E'];
    for(let i = 0; i < elems.length; i++) {
      assert.isTrue(C.contains(elems[i]), 'contains the elements of both sets');
    }
    
  });

  it("should produce an intersection of two sets", function() {
     let A = new FullSet(1,2,3,4);
     let B = new FullSet(3,4,5,6);
     let inty = A.intersect(B);
     assert.isTrue(inty.equal(new FullSet(3,4)));

     let C = new FullSet(A);
     let D = new FullSet(A,B);
     let intb = D.intersect(C);
     assert.isTrue(intb.equal(C));
  });

  it("should give a complement, given a universe", function() {
    let universe = new FullSet(1,2,3,4,5);
    let A = new FullSet(1);
    let compA = A.complement(universe);
    assert.isTrue(compA.equal(new FullSet(2,3,4,5)));
  });

  it("should give a relative complement of a set", function() {
     let A = new FullSet(1,2,3,4);
     let B = new FullSet(3,4,5,6);
     let AminusB = A.relativeComplement(B);
     assert.isTrue(AminusB.equal(new FullSet(1,2)));
  });

  it("should give a symmetric difference", function() {
     let A = new FullSet(1,2,3,4);
     let B = new FullSet(3,4,5,6);
     let AtriangleB = A.symmetricDifference(B);
     assert.isTrue(AtriangleB.equal(new FullSet(1,2,5,6)));
  });

  it("should give a symmetric difference", function() {
     let A = new FullSet(1,2);
     let B = new FullSet(3,4);
     let AcrossB = A.crossProduct(B);
     let tuples = [[1,3],[2,3],[1,4],[2,4]];
     let i = 0;
     for(let element of AcrossB) {
        i++;
        assert.isTrue(tuples.some((x) => element[0] == x[0] && element[1] == x[1]));
     }
     assert.equal(i,4, "empty set is trivially true, but wrong")
  });


  it("should provide a powerset", function() {
     let A = new FullSet(1,2,3);
     let Apower = A.powerSet();
     let subsets = [
         new FullSet(),
         new FullSet(1),
         new FullSet(2),
         new FullSet(3),
         new FullSet(1,2),
         new FullSet(2,3),
         new FullSet(1,3),
         new FullSet(1,2,3)
     ]
     let i = 0;
     for(let subset of Apower) {
        i++;
        assert.isTrue(subsets.some((x) => subset.equal(x)));
     }
     assert.equal(i,8, "empty set is trivially true, but wrong")
  });
});
