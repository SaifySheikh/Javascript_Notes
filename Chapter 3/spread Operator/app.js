function sum(a,b,c){
    return a+b+c;
}

const arr=[1,2,3,4,5];

const ans=sum(...arr);
console.log(ans);

const arr1=[1,2,3];
const arr2=[4,5,6];
const result=[...arr1]+[...arr2];
console.log(result);