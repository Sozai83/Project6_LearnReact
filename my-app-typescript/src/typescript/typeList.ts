
//boolean
export const bool: boolean = true;


//number
export let num: number = 0;


//string

export let str: string = 'hello'


//array

export let arr1: Array<number> = [1, 2, 3]
export let arr3: (string | number)[] = ['1', 2, 3]


export let arr2: number[] = [1, 2, 3]



//tuple

export let tuple: [number, string] = [0, "a"]


//any


let any1: any = false;


// void

const funca = (): void => {
    const test = "TEST"
}


//null

const null1 = null;


//undefined

const underfined1: undefined = undefined;




//object


let obj1: object = {
    test: 'hello'
}


let obj2: {} = {
    hi: 'hello'
}


let obj3: { id: number, name: string } = { id: 1, name: 'a' }