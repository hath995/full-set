# FullSet

Full-Set is a wrapper class around the native ES6 set object which adds the classical set operations. 

For pedagogical purposes mostly, probably not production ready.

## Install

```sh
npm i --save full-set
```


## Requirements
This library relies on ES6 Sets, and so either a recent version of Node or the browsers will be required


## Documentation

### Methods

* [`constructor`](#constructor)
* [`add`](#add)
* [`clone`](#clone)
* [`contains`](#contains)
* [`equal`](#equal)
* [`remove`](#remove)
* [`values`](#values)
* [`union`](#union)
* [`intersect`](#intersect)
* [`complement`](#complement)
* [`relativeComplement`](#relativeComplement)
* [`symmetricDifference`](#symmetricDifference)
* [`crossProduct`](#crossProduct)
* [`powerSetIter`](#powerSetIter)
* [`powerSet`](#powerSet)
* [`cardinality`](#cardinality)
* [`size`](#size)


<a name="constructor"></a>
### constructor

Creates and adds elements to a set.

__Arguments__

* `...elements` - Variadic, any number of elements as arguments

__Example__

```js
    let A = new FullSet('1','2','3');
```

----------------------------------------

<a name="add"></a>
### add

Adds elements to the set

__Arguments__

* `...elements` - Variadic, any number of elements as arguments

```js
    let A = new FullSet('A','B');
    A.add('C','D','E');
```

----------------------------------------

<a name="clone"></a>
### clone

Creates a copy of a set

__Example__

```js
    let A = new FullSet('TOAST','EGGS','BACON');
    let B = A.clone();
```

----------------------------------------

<a name="contains"></a>
### contains

Given an element will reply with a boolean if the set containts that element

__Arguments__

* `element` - An element to query the set for

__Example__

```js
    let A = new FullSet('A','B','C','D','E');
    A.contains('D') //true
```

----------------------------------------

<a name="equal"></a>
### equal

This will compare another set for equality, when both sets contain the same elements

__Arguments__

* `other_set` - Another FullSet object to compare

__Example__

```js
    let A = new FullSet('1','2');
    let B = new FullSet('1','2');
    let E = new FullSet('1','2','1','2');
    A.equal(B) //equal sets should equal
    A.equal(E) //duplicates don't matter
```

----------------------------------------

<a name="remove"></a>
### remove

Remove elements from a set

__Arguments__

* `...elements` - Variadic, any number of elements to remove from the set as arguments

__Example__

```js
    let A = new FullSet('A','B','C','D','E');
    A.contains('D') //true
    A.contains('E') //true
    A.remove('D','E')
    A.contains('D') //false
    A.contains('E') //false
```

----------------------------------------

<a name="values"></a>
### values

Returns an iterator of the elements in the set

__Example__

```js
    let A = new FullSet('A','B','C','D','E');
    let iterator = A.values();
    iterator.next().value //A;
```

----------------------------------------

<a name="union"></a>
### union

Create a new set which has all the elements of both sets.

__Arguments__

* `other_set` - Another FullSet object

__Example__

```js
    let A = new FullSet("A","B");
    let B = new FullSet("D","E");  
    let C = A.union(B); //A,B,D,E
```

----------------------------------------

<a name="intersect"></a>
### intersect

Create a new set which only has elements this set and the other set contain.

__Arguments__

* `other_set` - Another FullSet object

__Example__

```js
     let A = new FullSet(1,2,3,4);
     let B = new FullSet(3,4,5,6);
     let inty = A.intersect(B); //3,4
```

----------------------------------------

<a name="complement"></a>
### complement

Given a universe set, it will return all of the elements not in this set.

__Arguments__

* `other_set` - Another FullSet object

__Example__

```js
    let universe = new FullSet(1,2,3,4,5);
    let A = new FullSet(1);
    let compA = A.complement(universe); //2,3,4,5
```

----------------------------------------

<a name="relativeComplement"></a>
### relativeComplement

Given another set, it will return a set of elements that are only in this set relative to the other set.

__Arguments__

* `other_set` - Another FullSet object

__Example__

```js
     let A = new FullSet(1,2,3,4);
     let B = new FullSet(3,4,5,6);
     let AminusB = A.relativeComplement(B); //1,2
```

----------------------------------------

<a name="symmetricDifference"></a>
### symmetricDifference

Given another set, it will return a set of elements that are in this set and in the other set, but not the elements that are in both.

__Arguments__

* `other_set` - Another FullSet object

__Example__

```js
     let A = new FullSet(1,2,3,4);
     let B = new FullSet(3,4,5,6);
     let AtriangleB = A.symmetricDifference(B); // 1,2,5,6
```

----------------------------------------

<a name="crossProduct"></a>
### crossProduct

Given another set, it will return a new set of ordered pairs (Arrays) of every combination of this set elements and the other sets elements.

__Arguments__

* `other_set` - Another FullSet object

__Example__

```js
     let A = new FullSet(1,2);
     let B = new FullSet(3,4);
     let AcrossB = A.crossProduct(B); //[1,3],[2,3],[1,4],[2,4]
```

----------------------------------------

<a name="powerSetIter"></a>
### powerSetIter

Iterator for all subsets of the set

__Example__

```js
     let A = new FullSet(1,2,3);
     let powerIterator = A.powerSet();
     powerSet.next().value();
```

----------------------------------------

<a name="powerSet"></a>
### powerSet

Set of all subsets

**warning** the size of this set is exponential, 2 ^ this.size();

__Example__

```js
     let A = new FullSet(1,2,3);
     let Apower = A.powerSet();
```

----------------------------------------

<a name="cardinality"></a>
### cardinality

Returns the number of elements in the set. 

__Example__

```js
     let A = new FullSet(1,2,3);
     A.cardinality() //3
```

----------------------------------------

<a name="size"></a>
### size

Returns the number of elements in the set. 

__Example__

```js
     let A = new FullSet(1,2,3);
     A.size() //3
```

