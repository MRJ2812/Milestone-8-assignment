import React from 'react';

const lStorage = (id) => {

    let localStoreCart = JSON.parse(localStorage.getItem('localStoreCart'))

    if (localStoreCart) {

        const value = localStoreCart[id]

        if (value) {
            localStoreCart[id] += 1
        }
        else {
            localStoreCart[id] = 1
        }
    }
    else {
        localStoreCart = {}
        localStoreCart[id] = 1
    }
    localStorage.setItem('localStoreCart', JSON.stringify(localStoreCart))


};

let time = 0
const setCartFromLocal = (APIproducts) => {

    let localStoreCart = JSON.parse(localStorage.getItem('localStoreCart'))


    if (localStoreCart) {
        console.log(localStoreCart)
        for (let id in localStoreCart) {
            const product = APIproducts.find(Apiproduct => Apiproduct.id == id)
            time += product.time
            console.log(time)
        }
    }
}



export { lStorage, setCartFromLocal };